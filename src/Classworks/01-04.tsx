import axios from "axios";
import { useState, useEffect } from "react";

// export default function WeatherApp() {
//   const [weather, setWeather] = useState([]);

//   function Display() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => setWeather(res.data))
//       .catch((err) => console.log(err));
//   }

//   return (
//     <div>
//       <button onClick={Display}>Click</button>
//       {weather.slice(0, 5).map((post: any) => (
//         <div className="Data" key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }









// export default function PizzaDevilery() {
//     const [name, setName] = useState("");
//     const [order, setOrder] = useState("");

//     const [response, setResponse] = useState("");

//     const HandleSubmit = () => {
//         axios.post("https://jsonplaceholder.typicode.com/posts", {
//             title: name,
//             body: order,
//         })
//         .then((res) => setResponse("тапсырыс қабылданды! ID:" + res.data.id))
//         .catch((err) => setResponse("тапсырыс қабылданбады!"));
//     }


//     return (
//         <div>
//             <h1>Devilery pizza!</h1>
//             <input type="text" placeholder="Атыңды жаз" value={name} onChange={(e) => setName(e.target.value)} />
//             <input type="text" placeholder="Қандай пицца керек" value={order} onChange={(e) => setOrder(e.target.value)} />
//             <button onClick={HandleSubmit}>Тапсырыс беру</button>
//             <p>{response}</p>
//         </div>
//     )
// }









export default function WeatherApp() {

    const [joke, setJoke] = useState("");

    const HandleJoke = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
       .then((res) => setJoke(res.data.setup + " " + res.data.punchline))
    }
    return (
        <div>
            <button onClick={HandleJoke}>New joke</button>
            <p>{joke}</p>
        </div>
    )
}