import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
}

const initialState: UserState = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserName: (state, action: PayloadAction<string>) => {
      state.name += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserName } = userSlice.actions;

export default userSlice.reducer;
