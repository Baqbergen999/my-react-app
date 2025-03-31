// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useParams,
// } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/user/:username" element={<UserProfile />} />
//       </Routes>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function UserProfile() {
    
//   const { username } = useParams();
//   return <h1>Welcome, {username}!</h1>;
// }
// export default App;










// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data));
//   }, [id]);

//   if (!product) return <h2>Loading...</h2>;

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <img src={product.image} alt="" />
//     </div>
//   );
// }

// export default App;











// import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/posts" element={<Posts />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/surprise" element={<Surprise />} />
//       </Routes>
//     </Router>
//   );
// }

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function Profile() {
//   return <h1>Profile Page</h1>;
// }

// function Posts() {
//   return <h1>Posts Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function Surprise() {
//   const navigate = useNavigate();
//   const pages = ["/", "/profile", "/posts", "/about"];

//   const goToRandomPage = () => {
//     const randomPage = pages[Math.floor(Math.random() * pages.length)];
//     navigate(randomPage);
//   };

//   return (
//     <div>
//       <h1> Surprise Page!</h1>
//       <button onClick={goToRandomPage}>Surprise Me!</button>
//     </div>
//   );
// }







// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/posts" element={<PostList />} />
//         <Route path="/posts/:id" element={<PostDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//       .then((res) => res.json())
//       .then((data) => setPosts(data));
//   }, []);

//   return (
//     <div>
//       <h1>📢 Blog Posts</h1>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body.substring(0, 50)}...</p>
//           <Link to={`/posts/${post.id}`}>Read More</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// function PostDetail() {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res) => res.json())
//       .then((data) => setPost(data));
//   }, [id]);

//   if (!post) return <h2>Loading...</h2>;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// export default App;








import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundGame />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>🏠 Home Page</h1>;
}

function NotFoundGame() {
  const navigate = useNavigate();
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
   setClicks(clicks + 1)
   if (clicks > 4) {
    navigate("/")
   }
  };

  return (
    <div>
      <h1>🎮 404 Mini Game</h1>
      <p>Click the button 5 times to go back home!</p>
      <button onClick={handleClick}>Click Me ({clicks}/5)</button>
    </div>
  );
}
