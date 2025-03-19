// import { BrowserRouter , Routes, Route, Link, useNavigate } from "react-router-dom";


// export default function AppRouter() {
//   return (
//   <BrowserRouter>
//   <Routes>
//     < Route path="/" element={<Home/>} />
//     < Route path="/about" element={<NotFound/>} />
//     < Route path="/company" element={<Company/>} />
//   </Routes>
//   </BrowserRouter>
//   )
// }

// function Navbar(){
//   return(
//     <nav>
//       <Link to="/about"> About</Link> {"   |   "}
//       <Link to="/contact"> Contact</Link> {"   |   "}
//       <Link to="https://www.canva.com/design/DAGeaL-Pk8M/VMC_BJLCEITQqh6Wb0vxMw/edit"> canva</Link> {"   |   "}
//       <a href="https://www.canva.com/design/DAGeaL-Pk8M/VMC_BJLCEITQqh6Wb0vxMw/edit" target="_blank"> a_canva</a>
//     </nav>
//   )
// }

// function Home() {
//   return <h1>Home Page</h1>
// }

// function About() {
//   return <h1>About Page</h1>
// }

// function Company() {
//   return <h1>Contact Page</h1>
// }






// import { useState, useEffect } from "react";

// function Navbar() {
//   const [theme, setTheme] = useState(() => {
//     return localStorage.getItem("theme") || "white";
//   });

//   useEffect(() => {
//     localStorage.setItem("theme", theme)
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "white" ? "black" : "white"));
//   };

//   return (
//     <nav style={{ backgroundColor: theme, padding: "10px" }}>
//       <button onClick={toggleTheme}>Түсін өзгерту</button>
//     </nav>
//   );
// }

// export default Navbar;










// import { useState, useEffect } from "react";

// function About() {
//   const [favorites, setFavorites] = useState(() => {
//     const savedFavorites = localStorage.getItem("favorites");
//     return savedFavorites ? JSON.parse(savedFavorites) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const addToFavorites = () => {
//     const newFavorites = [...favorites, "About"];
//     setFavorites(newFavorites);
//   };

//   return (
//     <div>
//       <h1>About Us</h1>
//       <button onClick={addToFavorites}>Менің сүйікті бетім</button>
//     </div>
//   );
// }

// export default About;










// function NotFound() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>❌ Page Not Found (404)</h1>
//       <button onClick={() => navigate(-1)}>Go Back</button>
//     </div>
//   );
// }







import { useState } from "react";

function Quiz() {
  const question = "React деген не?";
  const options = ["Framework", "Library", "Programming language"];
  const correctAnswer = "Library";

  const [message, setMessage] = useState("");

  const checkAnswer = (answer: any) => {
    if (answer === correctAnswer) {
      setMessage("Жауабыңыз дұрыс!");
    } else {
      setMessage("Қате!");
    }
  };

  return (
    <div>
      <h1>{question}</h1>
      {options.map((option, index) => (
        <button key={index} onClick={() => checkAnswer(option)}>
          {option}
        </button>
      ))}
      <p>{message}</p>
    </div>
  );
}

export default Quiz;
