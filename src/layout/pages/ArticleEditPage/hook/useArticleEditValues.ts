import { ArticleObject } from "../../../../api/models/types/ArticleObject";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { Validator } from "../../../../utils/validator/Validator";
import {
  resetArticleEdit,
  setArticleEdit,
  setArticleEditBodyError,
  setArticleEditBodyValue,
  setArticleEditDescriptionError,
  setArticleEditDescriptionValue,
  setArticleEditTagsValue,
  setArticleEditTitleError,
  setArticleEditTitleValue
} from "../slice/articleEditSlice.slice";

export const useArticleEditValues = () => {
  const dispatch = useAppDispatch();

  const values = useAppSelector(state => state.articleEdit.values);
  const errors = useAppSelector(state => state.articleEdit.errors);

  return {
    reset: () => { dispatch(resetArticleEdit()); },

    values: {
      title: values.title,
      description: values.description,
      body: values.body,
      tags: values.tagList || [],
    },
    errors: {
      title: errors.title,
      description: errors.description,
      body: errors.body,
    },

    set: {
      title: (title: string) => {
        dispatch(setArticleEditTitleValue(title));
        dispatch(setArticleEditTitleError(undefined));
      },
      description: (description: string) => {
        dispatch(setArticleEditDescriptionValue(description));
        dispatch(setArticleEditDescriptionError(undefined));
      },
      body: (body: string) => {
        dispatch(setArticleEditBodyValue(body));
        dispatch(setArticleEditBodyError(undefined));
      },
      tags: (tags: string[]) => {
        console.log(tags)
        dispatch(setArticleEditTagsValue(tags));
      },
      article: (article: ArticleObject | null) => {
        if (!article) {
          dispatch(resetArticleEdit());
          return;
        }

        dispatch(setArticleEdit(article))
      },
    },
    validate: () => {
      const commonRule = [
        {
          rule: (value: string) => !!value.trim(),
          message: "This filed cannot be empty."
        },
      ];

      const titleMessage = Validator.validate(values.title as string, commonRule);
      const descriptionMessage = Validator.validate(values.description, commonRule);
      const bodyMessage = Validator.validate(values.body, commonRule);

      dispatch(setArticleEditTitleError(titleMessage));
      dispatch(setArticleEditDescriptionError(descriptionMessage));
      dispatch(setArticleEditBodyError(bodyMessage));

      return !titleMessage && !descriptionMessage && !bodyMessage;
    }
  }
}
