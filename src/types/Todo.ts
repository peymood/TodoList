interface Todo {
    task: TodoTask;
    deleteTodo: (id: string) => void;
    editTodo: (id: string) => void;
    toggleComplete: (id: string) => void;
  }