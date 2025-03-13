import { createSlice } from '@reduxjs/toolkit';
import { Profile } from '../../../../api/models/types/Profile';
import { Authorization } from '../../../../api/models/types/Authorization';

export interface IAuthorizationState {
  values: Profile & Authorization;
  errors: Profile & Authorization;
}

const initialState: IAuthorizationState = {
  values: { username: "", password: "", email: "", image: "" },
  errors: { username: "", password: "", email: "", image: "" },
}

export const profileEditSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileUsernameValue: (state, action) => {
      state.values.username = action.payload;
    },
    setProfilePasswordValue: (state, action) => {
      state.values.password = action.payload;
    },
    setProfileEmailValue: (state, action) => {
      state.values.email = action.payload;
    },
    setProfileImageValue: (state, action) => {
      state.values.image = action.payload;
    },

    setProfileUsernameError: (state, action) => {
      state.errors.username = action.payload;
    },
    setProfilePasswordError: (state, action) => {
      state.errors.password = action.payload;
    },
    setProfileEmailError: (state, action) => {
      state.errors.email = action.payload;
    },
    setProfileImageError: (state, action) => {
      state.errors.image = action.payload;
    },

    resetProfile: (state) => {
      state.values = initialState.values;
      state.errors = initialState.errors;
    }
  },
})

export const {
  setProfileUsernameValue,
  setProfilePasswordValue,
  setProfileEmailValue,
  setProfileImageValue,
  setProfileUsernameError,
  setProfilePasswordError,
  setProfileEmailError,
  setProfileImageError,
  resetProfile,
} = profileEditSlice.actions;

export default profileEditSlice.reducer;
