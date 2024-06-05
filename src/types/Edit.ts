interface Edit {
    editTodo: (task: string, id: string) => void;
    task: TodoTask;
  }