import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../component/feedback/loading/Loading";
import actGetCourses from "./actGetCourses";

type TCourses = {
  id: number;
  title: string;
  description: string;
  instructor: "string";
  img: "string";
};

interface ICoursesState {
  records: TCourses[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICoursesState = {
  records: [],
  loading: "idle",
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCourses.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCourses.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.records = action.payload;
    });
    builder.addCase(actGetCourses.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.payload as string;
    });
  },
});

const { reducer: coursesReducer } = coursesSlice;
export default coursesReducer;
