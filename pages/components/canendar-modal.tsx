import { CalendarModal } from "@/models/Task";
import { Form, Input, Modal } from "antd";
import React from "react";

interface CalendarFormProps {
  modalData: CalendarModal;
  onSave: (taskDesc: { desc: string }) => void;
  onCancel: () => void;
}
const CalendarForm: React.FC<CalendarFormProps> = ({
  modalData,
  onSave,
  onCancel,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={modalData.visible}
      title={`Enter Task Description for Day ${modalData.day}`}
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onSave(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="desc"
          label="Descption"
          rules={[
            {
              required: true,
              message: "Please enter the task description!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default CalendarForm;
