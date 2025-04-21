import { useReducer, useState, useRef } from 'react';
import './App.css';

const initialState = [];

const todoReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: action.id, text: action.text, done: false }];
    case 'TOGGLE':
      return state.map((todo: any) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'EDIT':
      return state.map((todo: any) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case 'DELETE':
      return state.filter((todo: any) => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const nextId = useRef(1);

  const addTodo = (e: any) => {
    e.preventDefault();

    if (text.trim()) {
      dispatch({
        type: 'ADD',
        id: nextId.current,
        text,
      });

      nextId.current += 1;
      setText('');
    }
  };

  const startEditing = (todo: any) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (e: any) => {
    e.preventDefault();

    if (editText.trim()) {
      dispatch({
        type: 'EDIT',
        id: editingId,
        text: editText,
      });

      setEditingId(null);
      setEditText('');
    }
  };

  return (
    <div className="todo-container">
      <h2>Tasks lists</h2>

      <form onSubmit={addTodo} className="todo-form">
        <input
          className='input'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo: any) => (
          <li key={todo.id} className="todo-item">
            {editingId === todo.id ? (
              <form onSubmit={saveEdit} className="edit-form">
                <input
                  className='input'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditingId(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <input
                className='chekbox'
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => dispatch({ type: 'TOGGLE', id: todo.id })}
                />

                <span
                  onClick={() => startEditing(todo)}
                  className={`todo-text ${todo.done ? 'done' : ''}`}
                >
                  {todo.text}
                </span>

                <button onClick={() => dispatch({ type: 'DELETE', id: todo.id })}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
