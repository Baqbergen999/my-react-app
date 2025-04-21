import { createContext, useContext, useReducer } from 'react';

const initialState = {
  message: '',
  type: '',
};

const messageReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'success':
      return { message: 'Сәтті!', type: 'success' };
    case 'error':
      return { message: 'Қате!', type: 'error' };
    case 'clear':
      return { message: '', type: '' };
    default:
      return state;
  }
};

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, initialState);

  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
};

const MessageDisplay = () => {
  const { state } = useContext(MessageContext);

  if (!state.message) return null;

  const messageStyle = {
    color: state.type === 'success' ? 'greenyellow' : 'red',
    margin: '20px 0',
  };

  return <div style={messageStyle}>{state.message}</div>;
};

const App = () => {
  const { dispatch } = useContext(MessageContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Хабарлама көрсету</h1>
      <MessageDisplay />
      <button onClick={() => dispatch({ type: 'success' })} style={{ marginRight: '10px' }}>
        Show Success
      </button>
      <button onClick={() => dispatch({ type: 'error' })} style={{ marginRight: '10px' }}>
        Show Error
      </button>
      <button onClick={() => dispatch({ type: 'clear' })}>Clear</button>
    </div>
  );
};

const Root = () => (
  <MessageProvider>
    <App />
  </MessageProvider>
);

export default Root;
