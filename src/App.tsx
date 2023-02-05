import React, { useState, useEffect } from 'react';

interface Todo {
  id: number;
  task: string;
  importance: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );
  const [task, setTask] = useState('');
  const [importance, setImportance] = useState('Red');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), task, importance }]);
    setTask('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5 text-center mx-80 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg">Todo List</h1>
      <form onSubmit={handleSubmit} className='text-center'>
        <div className="mb-5">
          <input
            className="bg-gray-200 p-2 rounded-lg"
            type="text"
            placeholder="Add task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <select
            className="bg-gray-200 p-2 rounded-lg ml-5"
            value={importance}
            onChange={(e) => setImportance(e.target.value)}
          >
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg ml-5 hover:bg-blue-400 font-bold"
            type="submit"
          > 
          Add</button>
        </div>
      </form>
            <ul className='list-none'>
                {
                    todos.map((todo) => (
                        <li
                        key={todo.id}
                        className="bg-white p-5 rounded-lg shadow mb-5 leading-0 border-l-2 w-1/2 m-auto"
                        style={{borderColor: `${todo.importance}`}}>
                        <div className="flex justify-between ">
                          <p className="text-lg font-medium break-all max-w-2/3">{todo.task}</p>
                          <button
                            className="bg-red-500 text-white p-4 rounded-xl font-bold hover:bg-red-400 h-16 w-20 self-center"
                            onClick={() => deleteTodo(todo.id)}> 
                            Delete </button>
                        </div>
                        </li> 
                    ))
                }

            </ul>
        </div>
  )}

  export default App
