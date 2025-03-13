import { FC, useState } from "react";
import { Button } from "../../../ui/Button/Button";
import { ArticleObject } from "../../../../api/models/types/ArticleObject";
import { useUser } from "../../../../api/controllers/useUser";
import { useArticles } from "../../../../api/controllers/useArticles";
import { useAppNavigate } from "../../../../hooks/useAppNavigate";

import classes from "./article-description.module.scss";
import { Popconfirm } from "antd";

export type ArticleDescriptionProps = {
  preview?: boolean;
  value: ArticleObject;
  onDelete?: () => void;
  onEdit?: () => void;
};

export const ArticleDescription: FC<ArticleDescriptionProps> = ({ preview, value }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const user = useUser();
  const articles = useArticles();
  const navigate = useAppNavigate();

  const onEdit = () => navigate.toArticleEdit(value.id);

  const onDelete = () => setTooltipOpen(true);
  const onDeleteConfirm = async () => {
    const result = await articles.delete(value.id);
    if(result) navigate.toArticles();
    else navigate.toOops();

    closeTooltip();
  };

  const closeTooltip = () => setTooltipOpen(false);

  return (
    <div className={classes["article-description"]}>
      <div className={classes["article-description__text"]}>{value.description}</div>
      {!preview && user.isCurrent(value.author) && (
        <div className={classes["article-description__buttons"]}>
          <Button variant="red" size="small" onClick={onDelete}>
            Delete
          </Button>
          <Popconfirm
            align={{ offset: [0, 0] }}
            title="Are you sure to delete this article?"
            open={tooltipOpen}
            placement="rightTop"
            okText="Yes"
            cancelText="No"
            onConfirm={onDeleteConfirm}
            onCancel={closeTooltip}
          />
          <Button variant="green" size="small" onClick={onEdit}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};
