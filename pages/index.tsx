import { Alert, Calendar, theme } from "antd";
import type { Moment } from "moment";
import moment from "moment";
import React, { useState } from "react";
import CalendarForm from "./components/canendar-modal";
import { CalendarModal, Task } from "@/models/Task";
import { useDispatch } from "react-redux";
import { taskAction } from "@/store/task";
import Link from "next/link";
import { useQuery } from "react-query";
import taskAxios from "../services";

const CalendarApp: React.FC = () => {
  const userListQuery = useQuery<Task[], Error>(
    "taskList",
    async () => {
      const res = await taskAxios.getTaskList();
      return res.data.data;
    },
    { staleTime: 60000 }
  );
  const dispatch = useDispatch();
  const { token } = theme.useToken();
  const [modal, setModal] = useState<CalendarModal>({
    visible: false,
    day: "",
    desc: "",
  });
  const [selectedValue, setSelectedValue] = useState(() => moment());

  const onSelect = (selectedDate: Moment) => {
    let day = selectedDate.date();
    setSelectedValue(selectedDate);
    setModal((perv) => ({ ...perv, visible: true, day: day.toString() }));
  };

  const wrapperStyle: React.CSSProperties = {
    width: "50%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const onSave = (taskDesc: { desc: string }) => {
    setModal((perv) => ({ ...perv, visible: false }));
    let task: Task = {
      id: Math.random().toString(36).substring(7),
      day: modal.day.toString(),
      title: taskDesc.desc,
    };
    dispatch(taskAction.updateTask({ singleTask: task }));
  };
  return (
    <>
      {userListQuery.isLoading ? <div> Loading... </div> : null}
      <Alert
        className="w-80 self-center"
        message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
      />
      <div className="flex items-center mt-4 self-center" style={wrapperStyle}>
        <Calendar fullscreen={false} onSelect={onSelect} />
      </div>
      <Link className="green w-40 self-right" href="/task-list">
        Show Task List
      </Link>
      <CalendarForm
        modalData={modal}
        onSave={onSave}
        onCancel={() => {
          setModal((perv) => ({ ...perv, visible: false }));
        }}
      />
    </>
  );
};

export default CalendarApp;
