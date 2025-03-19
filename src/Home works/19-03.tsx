import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./19-03.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navbar() {
  return (
    <nav>
      <Link to="/profile">My Profile</Link> {" | "}
      <Link to="/projects">My Projects</Link> {" | "}
      <Link to="/about">About Me</Link>
    </nav>
  );
}

function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Profile</h1>
      <p>Name: Bakbergen Nurkadyr</p>
      <p>Email: bahbergen998@gmail.com</p>
      <p>School: Amjilt Cyber School</p>
      <button onClick={() => navigate("/projects")}>Go to My Projects</button>
    </div>
  );
}

function Projects() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        <li>Project about food: In this project we can order all foods and see total money.</li>
        <li>Project about cars: By this project we can also order but cars, and chose them.</li>
        <li>Project about movies: By this project we can chose cinema for evening and get acquainted with their description</li>
      </ul>
      <button onClick={() => navigate("/about")}>Go to About Me</button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Me</h1>
      <p>My name is Bakbergen, I'm 13 years old and I'm web developer.</p>
      <button onClick={() => navigate("/profile")}>Go to My Profile</button>
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div>
      <h1>❌ Page Not Found (404)</h1>
    </div>
  );
}

export default App;