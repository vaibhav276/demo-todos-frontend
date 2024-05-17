export interface Todo {
    todo_id: string,
    title: string,
    description: string,
    due_date: Date,
    done: boolean
}

export interface TodoList {
    count: number,
    todos: Todo[]
}