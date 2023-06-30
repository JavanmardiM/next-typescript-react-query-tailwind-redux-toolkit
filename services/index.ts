import { TaskListRes } from "@/models/Task";
import _axios from "axios";

const instance = _axios.create({
  baseURL: "../pages",
});

const userAxios = {
  instance: instance,
  baseUrl: process.env.REACT_APP_BASE_TASK_SERVICE,

  getTaskList(): Promise<TaskListRes> {
    return instance.get(`/api/get-tasks`);
  },
};
export default userAxios;
