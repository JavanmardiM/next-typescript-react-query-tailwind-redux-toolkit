import { Task } from "@/models/Task";
import { createSlice } from "@reduxjs/toolkit";

const tasks: Task[] = [
  { title: "This is a task for Day 12", id: "1", day: "12" },
  { title: "This is a task for Day 26", id: "2", day: "26" },
];

const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: tasks,
    selectedTask: "",
  },
  reducers: {
    setTaskList(state, action) {
      state.taskList = action.payload.taskList;
    },
    setSelectedTask(state, action) {
      state.selectedTask = action.payload.selectedTask;
    },
    updateTask(state, action) {
      let tsks = state.taskList;
      let newTask = action.payload.singleTask;
      const item = tsks.find((item: Task) => item.day === newTask.day);
      if (!item) {
        tsks.push(newTask);
      } else {
        const itemIndex = tasks.findIndex((item) => item.day === newTask.day);
        tsks[itemIndex] = action.payload.singleTask;
        state.taskList = tsks;
      }
    },
  },
});

export const taskAction = taskSlice.actions;
export default taskSlice;
