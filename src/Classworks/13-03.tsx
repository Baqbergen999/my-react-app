import { useState, useEffect } from "react";

//Ex1

// export default function Exercises() {
//     const [color, setColor] = useState(() => {
//         return localStorage.getItem('selectedColor');
//     });

//     useEffect(() => {
//         localStorage.setItem('selectedColor', color);
//     }, [color]);

//     return (
//         <div style={{ background: color, height: '100vh' }}>
//             <h1>Select a color:</h1>
//             <button onClick={() => setColor('red')}>Red</button>
//             <button onClick={() => setColor('blue')}>Blue</button>
//             <button onClick={() => setColor('green')}>Green</button>
//         </div>
//     );
// }





//Ex2

// export default function Login() {
//     const [username, setUsername] = useState(() => {
//         return localStorage.getItem('username') || '';
//     });

//     useEffect(() => {
//         localStorage.setItem('username', username);
//     }, [username]);

//     return (
//         <div>
//             <h2>{username ? `Сәлем, ${username}!` : "Жүйеге кіріңіз"}</h2>
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)} // 🟡 Input өзгергенде state жаңарту
//                 placeholder="Атыңызды енгізіңіз"
//             />  

//             <button onClick={() => setUsername("")}>🚪 Шығу</button>
//         </div>
//     );
// }






//Ex3

// export default function VolumeControl() {
//     const [volume, setVolume] = useState(() => {
//         return localStorage.getItem('volume');
//     });

//     useEffect(() => {
//         localStorage.setItem('volume', volume)
//     }, [volume])

//     return (
//         <div>
//             <h2>Дыбыс деңгейі: {volume}</h2>
//             <input
//                 type="range"
//                 min="0"
//                 max="100"
//                 value={volume}
//                 onChange={(e) => setVolume(e.target.value)} // 🟡 Input өзгергенде state жаңарту
//             />
//         </div>
//     );
// }






//Ex4

// export default function Timer() {
//   const [seconds, setSeconds] = useState(0); // 🔴 Мұнда localStorage мәнін алу керек

//   useEffect(() => {
//     const savedTime = localStorage.getItem("seconds");
//     if (savedTime) {
//       setSeconds(parseInt(savedTime));
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("seconds", seconds);
//   }, [seconds]);

//   return (
//     <div>
//       <h2>Таймер: {seconds} сек</h2>
//     </div>
//   );
// }








//Ex5

// export default function Valuta() {
//     const [currency, setCurrency] = useState(() => {
//         return localStorage.getItem('currency');
//     });

//     useEffect(() => {
//         localStorage.setItem('currency', currency);
//     }, [currency]);

//     return (
//         <div>
//             <h2>Таңдалған валюта: {currency}</h2>
//             <button onClick={() => setCurrency('USD')}>USD</button>
//             <button onClick={() => setCurrency('EUR')}>EUR</button>
//             <button onClick={() => setCurrency('KZT')}>KZT</button>
//         </div>
//     );
// }


//Ex6


// export default function ThemeToggle() {
//     const [theme, setTheme] = useState(() => localStorage.getItem('theme'));

//     useEffect(() => {
//         document.body.classList.add(theme);
//         return () => {
//             document.body.classList.remove(theme);
//         };
//     }, [theme]);

//     useEffect(() => {
//         localStorage.setItem('theme', theme);
//     }, [theme]);

//     const toggleTheme = () => {
//         setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
//     };

//     const style = {
//         backgroundColor: theme === 'light' ? 'white' : 'black',
//         color: theme === 'light' ? 'black' : 'white',
//         padding: '20px',
//         textAlign: 'center',
//         minHeight: '100vh'
//     };

//     return (
//         <div style={style}>
//             <h2>Current Theme: {theme}</h2>
//             <button onClick={toggleTheme}>
//                 Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//             </button>
//         </div>
//     );
// }







//Ex7


// export default function DausBeru() {
//     const [Daus, setDaus] = useState(() => {
//         const savedDaus = localStorage.getItem('Daus');
//         return savedDaus ? JSON.parse(savedDaus) : { option1: 0, option2: 0, option3: 0 };
//     })



//     useEffect(() => {
//         localStorage.setItem('Daus', JSON.stringify(Daus));
//     }, [Daus]);

//     const vote = (option: any) => {
//         setDaus(prevDaus => ({

//             ...prevDaus,
//             [option]: prevDaus[option] + 1
//         }));
//     }



//     return (
//         <div>
//             <h2>Дауыс беру жүйесі</h2>
//             <div>
//                 <button onClick={() => vote('option1')}>Тоқаев Қ.</button>
//                 <span>{Daus.option1}</span>
//             </div>
//             <div>
//                 <button onClick={() => vote('option2')}>Назарбаев Н.</button>
//                 <span>{Daus.option2}</span>
//             </div>
//             <div>
//                 <button onClick={() => vote('option3')}>Жигули М.</button>
//                 <span>{Daus.option3}</span>
//             </div>
//         </div>
//     );
// }



//Ex8


// export default function Countdown() {
//   const [time, setTime] = useState(() => {
//     return Number(localStorage.getItem("timeLeft")) || 10;
//   });

//   useEffect(() => {
//     if (time > 0) {
//       const timer = setInterval(() => {
//         setTime((prevTime) => {
//           const newTime = prevTime - 1;
//           localStorage.setItem("timeLeft", newTime);
//           return newTime;
//         });
//       }, 1000);

//       return () => clearInterval(timer);
//     }
//   }, [time]);

//   return (
//     <div>
//       <h2>Таймер: {time} секунд</h2>
//     </div>
//   );
// }



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Ой, тағы да рендер болды!");
  }, [count]);

  return (
    <div>
      <p>Санақ: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;