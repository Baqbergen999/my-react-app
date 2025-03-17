import { useState } from "react";

export default function App() {
    const [tasks, setTasks] = useState([
        { text: "Кітап оқу", completed: false },
        { text: "Тренировка", completed: true },
        { text: "Пашол наху орындамайм", completed: false },
    ]);

    const [filter, setFilter] = useState("all");

    function handleRemove(index: any) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function handleFilterChange(newFilter: any) {
        setFilter(newFilter);
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true;
    });

    return (
        <div>
            <div>
                <button onClick={() => handleFilterChange("all")}>Барлығы</button>
                <button onClick={() => handleFilterChange("completed")}>Аяқталғандар</button>
                <button onClick={() => handleFilterChange("incomplete")}>Аяқталмағандар</button>
            </div>
            <ul>
                {filteredTasks.map((task, index) => (
                    <li key={index}>
                        {task.text}
                        <button onClick={() => handleRemove(index)}>DELETE</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const [filter, setFilter] = useState([]);

//   function Zhup() {
//     setFilter(numbers.filter((num) =>  num % 2 === 0));
//   }

//   function Delete(index) {
//     setFilter(numbers.filter((num, i) => num !== i));
//   }

//   return (
//     <div>
//       <button onClick={Zhup}>Zhup sandar</button>
//       <ul>
//         {numbers.map((number, index) => (
//             <li key={index}>{number} <button onClick={Delete}>Delete</button></li>
//         ))}
//       </ul>

//       <h2>Zhup sandar</h2>

//       <ul>
//         {filter.map((num) => (
//           <li key={num}>{num}</li>
//         ))}
//       </ul>
//     </div>
//   );