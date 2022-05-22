import { useEffect, useState } from 'react';

async function fetchTodos() {
  const response = await fetch('http://localhost:3001/todos');
  const data = await response.json();
  return data;
}

// 'initial' -> 'loading' -> 'success' or 'error'

export function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [requestState, setRequestState] = useState('initial');

  useEffect(() => {
    setRequestState('loading');
    fetchTodos().then((data) => {
      setTodos(data);
      setRequestState('success');
    }).catch((e) => setRequestState('error'));
  }, []);

  // console.log(isLoading, todos)

  const isLoading = requestState === 'initial' || requestState === 'loading';
  const isError = requestState === 'error'
  return (
    <div>
      <h1>Todo list</h1>
      {isError && <h1>eerror</h1>}
      {isLoading ? (
        <h2>Loading ....</h2>
      ) : (
        <ul>
          {todos.map((aTodo) => (
            <li>{aTodo.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
