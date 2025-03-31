// import { useParams } from "react-router-dom";

// const Profile = () => {
//   const { username } = useParams();
//   return <h1>Welcome, {username}!</h1>;
// };

// export default Profile;






// import { useParams, useNavigate } from "react-router-dom";

// const Dashboard = ({ setIsAuthenticated }) => {
//   const { userId } = useParams();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     navigate("/");
//   };

//   return (
//     <div>
//       <h1>{userId === "admin" ? "Admin Panel" : "User Dashboard"}</h1>
//       <p>Welcome, {userId}!</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;










// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div>
//       <h1>Users List</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
//             <strong>{user.name}</strong> - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;











import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;