import { useState } from "react";
import Edit from "./Edit";
import Todo from "./Todo";
import TodoTask from "./TodoTask";
import { v4 as uuidv4 } from 'uuid';
import { Col, Row } from "antd";



const TodoMain = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id: string) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task: string, id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <Row className="TodoWrapper">
      
    <Col xs={24} lg={12} >
      <TodoTask addTodo={addTodo} /> </Col>

      <Col xs={24} lg={12}>
      {todos.map((todo) =>
        todo.isEditing ? (
          <Edit editTodo={editTask} task={todo} key={todo.id} />
        ) : (
        
          <Todo
          key={todo.id}
          task={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
          />
        )
      )}
      </Col>
      
    </Row>
  );
};

export default TodoMain;
