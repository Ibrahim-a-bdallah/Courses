import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetCourses = createAsyncThunk(
  "courses/actGetCourses",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("http://localhost:3000/courses");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetCourses;
