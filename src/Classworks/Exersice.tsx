// import {useState} from 'react';

// function Text() {
//     const [text, setText] = useState('');

//     function AddText(event: any) {
//         setText(event.target.value);
//     }

//     return (
//         <>
//           <input onChange={AddText} value={text} type="text"/>
//           <h2>{text}</h2>
//         </>
//     )
// }

// export default Text;






// import {useState} from 'react';

// function ToDoList() {
//     const [text, setText] = useState('');
//     const [list, setList] = useState([]);

//     function AddText(event: any) {
//         setText(event.target.value);
//     }

//     function AddToList () {
//         setList([...list, text]);
//         setText('');
//     }

//     return (
//         <>
//         <h1>Тапсырмалар тізімі</h1>
//           <input onChange={AddText} value={text} type="text"/>
//           <button onClick={AddToList}>Add</button>
//           <ul>
//             {list.map((item, index) => <li key={index}>{item}</li>)}
//           </ul>
//         </>
//     )
// }

// export default ToDoList;



//Class work


//Ex1
// import {useState} from 'react';

// function Counter() {
//     const [count, setCount] = useState(0);

//     function add() {
//         setCount(count + 1);
//         if (count == 10) {
//             alert('Сіз онға жеттіңіз!')
//         }
//     }
//     function minus() {
//         setCount(count - 1);
//         if (count < 0) {
//             alert('0 ден төмен болмауы керек!')
//         }
//     }

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={add}>+</button>
//             <button onClick={minus}>-</button>
//         </>
//     )
// }
 
// export default Counter;



//Ex2
import { useState } from 'react';

function ColorSwitcher() {
    const [color, setColor] = useState('black');
    const [history, setHistory] = useState<string[]>([]);

    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#FF33A1', '#A1FF33', '#FF8C33'];

    const changeColor = () => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(newColor);
        setHistory([newColor, ...history.slice(0, 4)]);
    };

    return (
        <>
            <h1 style={{ background: color }}>Hello World</h1>
            <button onClick={changeColor}>Change color</button>
            <h2>Color History:</h2>
            <ul>
                {history.map((color, index) => (
                    <li key={index} style={{ color }}>{color}</li>
                ))}
            </ul>
        </>
    );
}

export default ColorSwitcher;