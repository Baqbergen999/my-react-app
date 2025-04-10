import { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import "./User.css";
const PeopleContext = createContext();

const PeopleProvider = ({ children }) => {
  const [people] = useState([
    { id: 1, fullName: "Baqbergen", age: 25, email: "bahbergen998@gmail.com" },
    { id: 2, fullName: "Bekarys", age: 30, email: "bekarys008@gmail.com" },
    { id: 3, fullName: "Dias", age: 22, email: "dias005@gmail.com" },
  ]);

  return <PeopleContext.Provider value={{ people }}>{children}</PeopleContext.Provider>;
};

const PeopleOverview = () => {
  const { people } = useContext(PeopleContext);

  return (
    <div className="people-overview">
      <h2>People Directory</h2>
      <ul>
        {people.map((person: any) => (
          <li key={person.id}>
            <Link to={`/profile/${person.id}`}>{person.fullName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProfilePage = () => {
  const { people } = useContext(PeopleContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const person = people.find((p: any) => p.id === parseInt(id));

  if (!person) {
    return <p>User not found</p>;
  }

  return (
    <div className="profile-page">
      <h2>{person.fullName}</h2>
      <p>Age: {person.age}</p>
      <p>Email: {person.email}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

const MainApp = () => {
  return (
    <Router>
      <PeopleProvider>
        <div className="main-app">
          <h1>User Management App</h1>
          <Routes>
            <Route path="/" element={<PeopleOverview />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </div>
      </PeopleProvider>
    </Router>
  );
};

export default MainApp;
