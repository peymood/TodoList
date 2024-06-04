import { useState } from "react";
import { Button } from "antd";
import {Input} from "antd";

const Edit = (editTodo, task) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        //taghir vaziat bedune refresh shodan moroorgar 
        e.preventDefault();
        
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" />
    <Button type="primary" className='todo-btn'>Add Task</Button>
  </form>
  )
}

export default Edit ; 