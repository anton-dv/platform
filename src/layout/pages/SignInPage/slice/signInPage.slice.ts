import { createSlice } from '@reduxjs/toolkit';
import { Authorization } from '../../../../api/models/types/Authorization';

export interface IAuthorizationState {
  values: Authorization;
  errors: Authorization;
}

const initialState: IAuthorizationState = {
  values: { password: "", email: "" },
  errors: { password: "", email: "" },
}

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setSignInPasswordValue: (state, action) => {
      state.values.password = action.payload;
    },
    setSignInEmailValue: (state, action) => {
      state.values.email = action.payload;
    },
    setSignInPasswordError: (state, action) => {
      state.errors.password = action.payload;
    },
    setSignInEmailError: (state, action) => {
      state.errors.email = action.payload;
    },
    resetSignIn: (state) => {
      state.values = initialState.values;
      state.errors = initialState.errors;
    }
  },
})

export const { setSignInPasswordValue, setSignInEmailValue, setSignInPasswordError, setSignInEmailError, resetSignIn } = signInSlice.actions;
export default signInSlice.reducer;
