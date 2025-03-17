import './27-2.css'

//Ex1

// export default function UserRole(props: any) {
//     return (
//       <div className="text">
//         <h1>{props.role === "admin" ? "Админ" : props.role === "user" ? "Қолданушы" : "Қонақ"}</h1>
//       </div>
//     );
//   }

//Ex2

// export default function Temp(props: any) {
//     return (
//       <div>
//         {props.temp > 40 ? "Өте ыстық" :
//          props.temp >= 30 ? "Ыстық" :
//          props.temp >= 15 ? "Жылы" :
//          props.temp >= 0 ? "Суық" : "Өте суық"}
//       </div>
//     );
// }  

//Ex3

// import { useState } from "react";

// export default function Subscription() {
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   return (
//     <button
//       onClick={() => setIsSubscribed(!isSubscribed)}
//     >
//       {isSubscribed ? "Бас тарту" : "Жазылу"}
//     </button>
//   );
// }

//Ex4

export default function TempColor(temp: any) {
    let desc = "";
    let textColor = "";
  
    if (temp > 40) {
      desc = "Өте ыстық";
      textColor = "red";
    } else if (temp >= 30) {
      desc = "Ыстық";
      textColor = "orange";
    } else if (temp >= 15) {
      desc = "Жылы";
      textColor = "yellow";
    } else if (temp >= 0) {
      desc = "Суық";
      textColor = "cyan";
    } else {
      desc = "Өте суық";
      textColor = "blue";
    }
  
    return <h1 className='text' style={{ color: textColor, fontWeight: "600" }}>{desc}</h1>;
}