import { useState } from 'react';
import { Button, Input } from 'antd';



const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault(); // dosent change the browser page 
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
      />
      <Button type="primary" htmlType="submit" className="todo-btn">
        ذخیره
      </Button>
    </form>
  );
};

export default Edit;
