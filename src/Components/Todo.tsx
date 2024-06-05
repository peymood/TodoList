
import { Button } from 'antd';

interface Todo {
  task: TodoTask;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
}

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? 'completed' : 'incompleted'}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="butnnn">
        <Button type="dashed" className="edit" onClick={() => editTodo(task.id)}>
          ویرایش
        </Button>
        <Button type="dashed" className="delete" onClick={() => deleteTodo(task.id)}>
          حذف
        </Button>
      </div>
    </div>
  );
};

export default Todo;
