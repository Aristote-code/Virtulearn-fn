import { createSlice } from "@reduxjs/toolkit";

const userProps = { names: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { user: userProps, isLogged: false },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = { user: userProps, isLogged: false };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
