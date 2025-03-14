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
import { useArticleEditValues } from "./hook/useArticleEditValues";

export const ArticleEditPage: FC = () => {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const articles = useArticles();
  const navigate = useAppNavigate();
  const state = useArticleEditValues();

  const loadArticle = async () => {
    if (!id) return;
    setLoading(true);
    const article = await articles.getOne(id);
    state.set.article(article);
    setLoading(false);
  };

  useEffect(() => {
    state.reset();
    loadArticle();
  }, [id]);

  const onSubmit = async () => {
    const isValid = state.validate();

    if (!isValid) return;

    const data = {
      ...state.values,
      tagList: state.values.tags.filter(tag => tag),
    };

    setLoading(true);
    const result = id ? await articles.edit(id, data) : await articles.create(data);
    setLoading(false);

    if (result) {
      if (id) navigate.toArticle(id);
      else navigate.toArticles();
    } else navigate.toOops();
  };

  console.log(state.values)
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
              value={state.values.title}
              onChange={state.set.title}
              error={state.errors.title}
            />
            <Input
              name="Short description"
              placeholder="Title"
              value={state.values.description}
              onChange={state.set.description}
              error={state.errors.description}
            />
            <Input
              name="Text"
              height={168}
              value={state.values.body}
              onChange={state.set.body}
              error={state.errors.body}
            />
            <ArticleEditTagSection tags={state.values.tags} onChange={state.set.tags} />
          </div>

          <FormButton title="Send" onSubmit={onSubmit} width={320} />
        </div>
      </Backdrop>
    </BasePage>
  );
};
