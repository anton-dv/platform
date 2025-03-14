import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice.slice';
import { signInSlice } from '../../layout/pages/SignInPage/slice/signInPage.slice';
import { signUpSlice } from '../../layout/pages/SignUpPage/slice/signUpSlice.slice';
import { profileEditSlice } from '../../layout/pages/ProfilePage/slice/profileEdit.slice';
import { articleEditSlice } from '../../layout/pages/ArticleEditPage/slice/articleEditSlice.slice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    signIn: signInSlice.reducer,
    signUp: signUpSlice.reducer,
    profile: profileEditSlice.reducer,
    articleEdit: articleEditSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
