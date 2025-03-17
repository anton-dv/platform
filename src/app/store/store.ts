import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice.slice';
import { articleEditSlice } from '../../layout/pages/ArticleEditPage/slice/articleEditSlice.slice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    articleEdit: articleEditSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
