import { createSlice } from '@reduxjs/toolkit';
import { ArticleEditObject } from '../../../../api/models/types/ArticleEditObject';

export interface IArticleEditState {
  values: ArticleEditObject;
  errors: ArticleEditObject;
}

const initialState: IArticleEditState = {
  values: { title: "", description: "", body: "", tagList: [] },
  errors: { title: "", description: "", body: "", tagList: [] },
}

export const articleEditSlice = createSlice({
  name: 'articleEdit',
  initialState,
  reducers: {
    setArticleEditTitleValue: (state, action) => {
      state.values.title = action.payload;
    },
    setArticleEditDescriptionValue: (state, action) => {
      state.values.description = action.payload;
    },
    setArticleEditBodyValue: (state, action) => {
      state.values.body = action.payload;
    },
    setArticleEditTagsValue: (state, action) => {
      state.values.tagList = action.payload || [];
    },

    setArticleEditTitleError: (state, action) => {
      state.errors.title = action.payload;
    },
    setArticleEditDescriptionError: (state, action) => {
      state.errors.description = action.payload;
    },
    setArticleEditBodyError: (state, action) => {
      state.errors.body = action.payload;
    },

    setArticleEdit: (state, action) => {
      state.values = { ...action.payload, tagList: action.payload.tagList || [] };
    },

    resetArticleEdit: (state) => {
      state.values = initialState.values;
      state.errors = initialState.errors;
    }
  },
})

export const {
  setArticleEditTitleValue,
  setArticleEditDescriptionValue,
  setArticleEditBodyValue,
  setArticleEditTagsValue,
  setArticleEditTitleError,
  setArticleEditDescriptionError,
  setArticleEditBodyError,
  resetArticleEdit,
  setArticleEdit,
} = articleEditSlice.actions;

export default articleEditSlice.reducer;
