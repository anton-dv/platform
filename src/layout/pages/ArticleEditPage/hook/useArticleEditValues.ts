import { useState } from "react";
import { ArticleObject } from "../../../../api/models/types/ArticleObject";
import { Validator } from "../../../../utils/validator/Validator";
import { ArticleEditObject } from "../../../../api/models/types/ArticleEditObject";

export const useArticleEditValues = () => {
  const defaultValues = { title: "", description: "", body: "", tagList: [] };

  const [values, setValues] = useState<ArticleEditObject>(defaultValues);
  const [errors, setErrors] = useState<ArticleEditObject>(defaultValues);

  return {
    reset: () => {
      setValues(defaultValues);
      setErrors(defaultValues);
    },

    values: { ...values, tags: values.tagList || [] },
    errors,

    set: {
      title: (title: string) => {
        setValues(prev => ({ ...prev, title }));
        setErrors(prev => ({ ...prev, title: "" }));
      },
      description: (description: string) => {
        setValues(prev => ({ ...prev, description }));
        setErrors(prev => ({ ...prev, description: "" }));
      },
      body: (body: string) => {
        setValues(prev => ({ ...prev, body }));
        setErrors(prev => ({ ...prev, body: "" }));
      },
      tags: (tags: string[]) => {
        console.log(tags)
        setValues(prev => ({ ...prev, tagList: tags }));
      },
      article: (article: ArticleObject | null) => {
        const articleValues = !article ? defaultValues : {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tags,
        };

        setValues(articleValues);
        setErrors(defaultValues);
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

      setErrors({
        title: titleMessage || "",
        description: descriptionMessage || "",
        body: bodyMessage || "",
        tagList: [],
      });

      return !titleMessage && !descriptionMessage && !bodyMessage;
    }
  }
}
