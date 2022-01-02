import { configureStore } from "@reduxjs/toolkit";
import CharacterSlice from "./CharacterSlice.js";

export const store = configureStore({
  reducer: {
    characters: CharacterSlice,
  },
});
