import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task";

const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
});

export default store;
