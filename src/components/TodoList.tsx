import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.css';

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
        return <div className='container'>Loading todos...</div>;
    }

    return (
        <div className='container mx-auto px-4'>
      
       
  
        <ul className={styles.todoList}>
            {todos.slice(0, 5).map((todo) => (
                <li key={todo.id} 
               
                className='text-red-600 italic hover:text-blue-600'>

{todo.completed ? '(x)' : '( )'} {todo.title}  
                </li>
            ))}
        </ul>
        </div>
    );
};

export default TodoList;
