// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     navigate("/profile/Баха");
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;








// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     navigate("/profile/admin")
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;









// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     navigate("/users")// 🔄 Логин жасалғаннан кейін /users бетіне жібереді
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;








import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/users");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;