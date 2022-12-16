import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  nickname: null,
  changeState: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickname: payload.nickname,
    }),
  },
});

console.log("authSlice:", authSlice); //!