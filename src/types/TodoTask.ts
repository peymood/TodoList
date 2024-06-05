interface TodoTask {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
    addTodo: (todo: string) => void;
  }