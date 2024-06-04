import { useState } from "react";
import { Button } from "antd";
import {Input} from "antd";
const TodoTask = (addTodo) => {
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
    <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <Button type='primary' className='todo-btn'>Add Task</Button>
  </form>
  )
}

export default TodoTask ; 