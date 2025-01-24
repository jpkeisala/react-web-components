import React from 'react';

interface NextOnTodoProps {
    data: string;
}

const NextOnTodo: React.FC<NextOnTodoProps> = ({ data }) => {
    return <div className='border m-3'>Component: Next on To-Do: {data}</div>;
};

export default NextOnTodo;
