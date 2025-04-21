import { useReducer } from "react";
// const initialState = {
//     count: 0,
// }
// function CountReducer(state: any, action: any): any {
//     switch (action.type) {
//         case "increment":
//             return { count: state.count + 1 };
//         case "decrement":
//             return { count: Math.max(0, state.count - 1) }; 
//         default:
//             throw new Error("Unknown action type");
//     }
// }

// export default function Counter() {
    
//     const [state, dispatch] = useReducer(CountReducer, initialState);

//     return (
//         <div>
//             <h1>Count: {state.count}</h1>
//             <button onClick={()=> {
//                 dispatch({type: "increment"})
//             }}>+</button>
//             <button onClick={()=> {
//                 dispatch({type: "decrement"})
//             }}>-</button>
//         </div>
//     );
// }





const initialState = {
  name: "",
  password: "",
  error: "",
};

function FormReducer(state: any, action: any) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default function FormInput() {
  const [state, dispatch] = useReducer(FormReducer, initialState);

  const handleClick = (e: any) => {
  e.preventDefault();

  const password = state.password;

  if (password.length < 6) {
    dispatch({
      type: "error",
      payload: "Password is less than 6 letters",
    });
  } else if (!/[a-zA-Z]/.test(password)) {
    dispatch({
      type: "error",
      payload: "Password must have a Strings",
    });
  }else if (!(/\d/.test(password))) {
    dispatch({
      type: "error",
      payload: "Password must have a Numbers",
    });
  }else if (!(/[^a-zA-Z0-9]/.test(password))) {
    dispatch({
      type: "error",
      payload: "Password must have a symbols",
    });
  } else {
    dispatch({ type: "error", payload: "" });
    console.log("Submitted:", state);
  }


  };

  return (
    <form onSubmit={handleClick}>
      <label>Name:</label>
      <input
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
        type="text"
        placeholder="Write name"
      />
      <label>Password:</label>
      <input
        onChange={(e) =>
          dispatch({ type: "password", payload: e.target.value })
        }
        type="password"
        placeholder="Write password"
      />
      <p>Password must contain at least 6 letters</p>
      <p style={{ color: "red" }}>{state.error}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
