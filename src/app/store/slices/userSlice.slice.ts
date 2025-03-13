import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../api/models/types/User';

export interface IAuthorizationState {
  current: User | null | undefined;
}

const initialState: IAuthorizationState = {
  current: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.current = action.payload;
    },
  },
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
