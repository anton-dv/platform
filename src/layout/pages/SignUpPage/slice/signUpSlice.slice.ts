import { createSlice } from '@reduxjs/toolkit';
import { Authorization } from '../../../../api/models/types/Authorization';

export interface IAuthorizationState {
  values: Authorization & { repeat: string, agree: boolean };
  errors: Authorization & { repeat: string, agree: boolean };
}

const initialState: IAuthorizationState = {
  values: { password: "", email: "", username: "", repeat: "", agree: false },
  errors: { password: "", email: "", username: "", repeat: "", agree: false },
}

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setSignUpUsernameValue: (state, action) => {
      state.values.username = action.payload;
    },
    setSignUpEmailValue: (state, action) => {
      state.values.email = action.payload;
    },
    setSignUpPasswordValue: (state, action) => {
      state.values.password = action.payload;
    },
    setSignUpRepeatValue: (state, action) => {
      state.values.repeat = action.payload;
    },
    setSignUpAgreeValue: (state, action) => {
      state.values.agree = action.payload;
    },

    setSignUpUsernameError: (state, action) => {
      state.errors.username = action.payload;
    },
    setSignUpEmailError: (state, action) => {
      state.errors.email = action.payload;
    },
    setSignUpPasswordError: (state, action) => {
      state.errors.password = action.payload;
    },
    setSignUpRepeatError: (state, action) => {
      state.errors.repeat = action.payload;
    },
    setSignUpAgreeError: (state, action) => {
      state.errors.agree = action.payload;
    },
    resetSignUp: (state) => {
      state.values = initialState.values;
      state.errors = initialState.errors;
    }
  },
})

export const {
  setSignUpUsernameValue,
  setSignUpEmailValue,
  setSignUpPasswordValue,
  setSignUpRepeatValue,
  setSignUpAgreeValue,
  setSignUpUsernameError,
  setSignUpEmailError,
  setSignUpPasswordError,
  setSignUpRepeatError,
  setSignUpAgreeError,
  resetSignUp,
} = signUpSlice.actions;

export default signUpSlice.reducer;
