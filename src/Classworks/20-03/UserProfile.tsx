// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const UserProfile = () => {
//   const { id } = ___();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       __________
//       .then((data) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching user:", error));
//   }, [id]);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Phone:</strong> {user.phone}</p>
//       <p><strong>Company:</strong> {user.company.name}</p>
//       <button onClick={() => navigate("/users")}>Back</button>
//     </div>
//   );
// };

// export default UserProfile;







import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <button onClick={() => navigate("/users")}>Back</button>
    </div>
  );
};

export default UserProfile;