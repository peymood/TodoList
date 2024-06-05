import { useState } from 'react';
import { Button, Input } from 'antd';



const TodoTask = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
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
        ثبت
      </Button>
    </form>
  );
};

export default TodoTask;
