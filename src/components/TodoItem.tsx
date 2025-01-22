import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface TodoItemProps {
    id: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ id }) => {
    const [todo, setTodo] = useState<Todo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setTodo(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching todo item:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading todo...</div>;
    }

    return (
        <div>
            {todo ? (
                <>
                    <h3>{todo.title}</h3>
                    <p>
                        <strong>Status:</strong> {todo.completed ? 'Completed' : 'Pending'}
                    </p>
                    <p>
                        <strong>User ID:</strong> {todo.userId}
                    </p>
                    <Button>Text</Button>
                </>
            ) : (
                <p>Todo not found</p>
            )}
        </div>
    );
};

export default TodoItem;
