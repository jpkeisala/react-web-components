import React, { useEffect, useState } from 'react';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching todos:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading todos...</div>;
    }

    return (
        <>
        <style>
            {`
                :host {
                    display: block;
                    background: #f5f5f5;
                    padding: 20px;
                    border-radius: 10px;
                }
                .todo-item {
                    background: white;
                    padding: 10px;
                    margin-bottom: 5px;
                    border: 1px solid #ddd;
                }
            `}
        </style>
       
  
        <ul className="todo-item">
            {todos.slice(0, 5).map((todo) => (
                <li key={todo.id}>
                    {todo.title} - {todo.completed ? 'Done' : 'Pending'}
                </li>
            ))}
        </ul>
        </>
    );
};

export default TodoList;
