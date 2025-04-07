import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import "./App.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();



    if (!email || !password) {
      setError("Invalid email or password.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Email must contain '@' and '.'");
      return;
    }    

    if (password.length < 4) {
      setError("Password must be at least 4 characters long.");
      return;
    }

    setError("");
    onLogin();
    navigate("/home");
  };

  return (
    <div className="body">
      <div className="login">
        <h2>Login</h2>
        {error && <p className="error" style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" type="submit">
            Login
          </button>
         
        </form>
      </div>
    </div>
  );
}


function Home() {
  return <h2 className="welcome">Welcome <span>User!</span></h2>;
}

function BookGallery() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books")
      .then((res) => {
        if (!res.ok) throw new Error("Error!");
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="book-gallery">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Error loading datas.");
        return res.json();
      })
      .then((data) => setBook(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.description}</p>
    </div>
  );
}

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          {auth ? (
            <div className="nav-bar">
              <Link className="home" to="/home">
                Home
              </Link>
              <Link className="books" to="/books">
                Book Gallery
              </Link>
              <button className="logout" onClick={() => setAuth(false)}>
                Logout
              </button>
            </div>
          ) : (
            <Link className="link-login" to="/">
              Login
            </Link>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Login onLogin={() => setAuth(true)} />} />
          <Route path="/home" element={auth ? <Home /> : <Navigate to="/" />} />
          <Route
            path="/books"
            element={auth ? <BookGallery /> : <Navigate to="/" />}
          />
          <Route
            path="/book/:id"
            element={auth ? <BookDetail /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
