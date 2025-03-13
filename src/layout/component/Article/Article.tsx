import { FC } from "react";
import { ArticleHeader } from "../Article/ArticleHeader/ArticleHeader";
import { ArticleDescription } from "../Article/ArticleDescription/ArticleDescription";
import { ArticleContent } from "../Article/ArticleContent/ArticleContent";
import { ArticleObject } from "../../../api/models/types/ArticleObject";
import { BackdropType } from "../../ui/Backdrop/BackdropType";
import { Backdrop } from "../../ui/Backdrop/Backdrop";
import { Skeleton } from "antd";

export type ArticleProps = {
  value?: ArticleObject;
  preview?: boolean;
  loading?: boolean;
};

export const Article: FC<ArticleProps> = ({ value, preview, loading }) => {
  return (
    <Backdrop type={preview ? BackdropType.ArticlePreview : BackdropType.ArticleView}>
      {loading && (
        <div style={{ margin: "-5px" }}>
          {!preview && <Skeleton active paragraph={false} avatar style={{marginBottom: "30px"}}/>}
          <Skeleton active />
        </div>
      )}
      {!loading && value && (
        <>
          <ArticleHeader preview={preview} value={value} />
          <ArticleDescription preview={preview} value={value} />
          {!preview && <ArticleContent value={value} />}
        </>
      )}
    </Backdrop>
  );
};
