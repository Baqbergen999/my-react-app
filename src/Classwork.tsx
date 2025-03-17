// import './Classwork.css'

// function And() {
//     const test = true;

//     if(test) {
//         console.log('It is work');
//     }
//     else {
//         console.log("It isn't work");
        
//     };
// };

// export default And;





// import './Classwork.css'

// function Ex1() {
//     const isAdmin = true;

//     return(
//         <>
//           {isAdmin ? <p>Сіз әкімшісіз!</p> : <p>Қарапайым қолданушы!</p>}
//         </>
//     )
// };

// export default Ex1;






// function Ex2() {
//     const isOnline = false;

//     return(
//         <>
//           {isOnline ? <p>Сіз онлайнсыз!</p> : <p>Сіз оффлайнсыз!</p>}
//         </>
//     )
// }
// export default Ex2;







// function Ex3() {
//     const temp = 25;

//     return(
//         <>
//         {temp > 30 ? <p>Ыстық</p> : temp > 20 ? <p>Жылы</p> : <p>Суық</p>}
//         </>
//     )
// }
// export default Ex3;






// import { useState } from "react";

// export default function ThemeToggle() {
//     const [isDark, setDark] = useState(true);

//     return (
//         <div style={{
//             backgroundColor: isDark ? "black" : "white",
//             color: isDark ? "white" : "black",
//             height: "100vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column"
//         }}>
//             <p>{isDark ? "Қараңғы режим" : "Жарық режим"}</p>
//             <button onClick={() => {
//                 setDark(!isDark)
//             }}>
//                 {isDark ? "Жарық режимге ауысу" : "Қараңғы режимге ауысу"}
//             </button>

//         </div>
//     )
// }




// import { useState } from "react";

// export default function ToggleText() {
//     const [show, setShow] = useState(false);

//     return (
//         <div>
//             <button onClick={() => {
//                 setShow(!show)
//             }}>{show ? "Жасыру" : "Көбірек"}</button>
//             <h1>{show && <p>Бұл қосымша ақпарат</p> || <p>Жасырылды</p>}</h1>
//         </div>
//     )
// }







import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text) {
      setTasks([...tasks, { text, done: false }]);
      setText("");
    }
  };

  const editTask = (index: any) => {
    const newText = prompt("Тапсырманы өзгерту:", tasks[index].text);
    if (newText) {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = newText;
      setTasks(updatedTasks);
    }
  };

  const Done = (index: any) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Қосу</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button onClick={() => editTask(index)}>Өңдеу</button>
            <button onClick={() => Done(index)}>
              {task.done ? "Қалпына келтіру" : "Орындалды"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
