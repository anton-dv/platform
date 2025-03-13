import { FC, useEffect, useState } from "react";

import { BasePage } from "../BasePage/BasePage";
import { Backdrop } from "../../ui/Backdrop/Backdrop";
import { BackdropType } from "../../ui/Backdrop/BackdropType";
import { Input } from "../../ui/Input/Input";
import { FormButton } from "../../component/Form/FormButton/FormButton";
import { ArticleEditTagSection } from "./ArticleEditTagSection/ArticleEditTagSection";
import { useArticles } from "../../../api/controllers/useArticles";
import { Loading } from "../../ui/Loading/Loading";
import { useParams } from "react-router-dom";

import classes from "./article-edit-page.module.scss";
import { useAppNavigate } from "../../../hooks/useAppNavigate";


export const ArticleEditPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const articles = useArticles();
  const navigate = useAppNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      articles.getOne(id).then(article => {
        if (article) {
          setTitle(article.title);
          setDescription(article.description);
          setBody(article.body);
          setTags(article.tags);
          setLoading(false);
        }
      });
    }
  }, []);

  const onSubmit = async () => {
    if (title.trim() === "") {
      setError(true);
      return;
    }

    const data = {
      title,
      description,
      body,
      tagList: tags.filter(tag => tag),
    };

    setLoading(true);
    const result = id ? await articles.edit(id, data) : await articles.create(data);
    setLoading(false);

    if (result) {
      if(id) navigate.toArticle(id);
      else navigate.toArticles();
    }
    else navigate.toOops();
  };

  const onTitleChange = (value: string) => {
    setError(false);
    setTitle(value);
  };

  return (
    <BasePage>
      <Backdrop type={BackdropType.ArticleEdit}>
        <div className={classes["article-edit-page"]}>
          <h2 className={classes["article-edit-page__title"]}>
            {id ? "Edit article" : "Create new article"}
          </h2>
          <div className={classes["article-edit-page"]}>
            {loading && <Loading />}
            <Input
              name="Title"
              value={title}
              onChange={onTitleChange}
              error={error ? "Title cannot be empty." : undefined}
            />
            <Input
              name="Short description"
              placeholder="Title"
              value={description}
              onChange={setDescription}
            />
            <Input name="Text" height={168} value={body} onChange={setBody} />
            <ArticleEditTagSection tags={tags} onChange={setTags} />
          </div>

          <FormButton title="Send" onSubmit={onSubmit} width={320} />
        </div>
      </Backdrop>
    </BasePage>
  );
};
