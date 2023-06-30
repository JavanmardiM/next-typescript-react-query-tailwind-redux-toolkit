import React from "react";
import { List } from "antd";
import { RootState } from "@/models/Task";
import { useSelector } from "react-redux";
import Link from "next/link";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.task.taskList);
  return (
    <>
      <List
        locale={{
          emptyText: "No Task to Show",
        }}
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item key={task.id}>
            <List.Item.Meta title={task.title} />
            <div>day {task.day}</div>
          </List.Item>
        )}
        pagination={{
          position: "bottom",
          pageSize: 10,
        }}
      />
      <Link className="green w-40 self-right" href="/">Show Calendar</Link>
    </>
  );
};
export default TaskList;
