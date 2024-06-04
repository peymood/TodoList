import { Button} from "antd";

const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div className="butnnn">
        <Button type='dashed' className="edit"  onClick={() => editTodo(task.id)}></Button> 
        <Button type='dashed' className="delete"  onClick={() => deleteTodo(task.id)}></Button>
        </div>
    </div>
  )
}

export default Todo ; 