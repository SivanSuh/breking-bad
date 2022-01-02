import { useEffect } from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "react-dotenv";

export const fetchCharacter = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    // const res = await axios(`https://www.breakingbadapi.com/api/characters`);

    const res = await axios(
      `${process.env.REACT_APP_BREKING_BAD_API}/characters`
    );
    return res.data;
  }
);

export const CharacterSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacter.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCharacter.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchCharacter.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = state.error.message;
    },
  },
});

export default CharacterSlice.reducer;
