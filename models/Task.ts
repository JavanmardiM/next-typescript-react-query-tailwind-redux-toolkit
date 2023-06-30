export interface Task {
  id: string;
  title: string;
  day: string;
}
export interface CalendarModal {
  visible: boolean;
  day: String;
  desc: String;
}
export interface TaskState {
  taskList: Task[];
}
export interface RootState {
  task: TaskState;
}
export interface TaskListRes {
  data: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Task[];
  };
}
