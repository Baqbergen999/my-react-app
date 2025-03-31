// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Protect from "./Protect"

// export default function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route element={<Protect/>}>
//                     <Route path="/bake" element={<Bake_acc />} />
//                     <Route path="/kaisar" element={<Kaisar_acc />} />
//                 </Route>
                
//             </Routes>
//         </BrowserRouter>
//     )
// }

// function Home() {
//     return <h1>Home Page</h1>
// }

// function Bake_acc() {
//     return <h1>Bake instagram Page</h1>
// }

// function Kaisar_acc() {
//     return <h1>Kaisar instagram Page</h1>
// }







// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import ProtectedRoute from "./Protected";
// import Login from "./Login";
// import Profile from "./Profile";

// export default function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(true);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route
//           path="/profile/:username"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }





// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import ProtectedRoute from "./Protected";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route 
//           path="/profile/:userId" 
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Dashboard setIsAuthenticated={setIsAuthenticated} />
//             </ProtectedRoute>
//           } 
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;









// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Users from "./Users";
// import UserProfile from "./UserProfile";
// import Login from "./Login";
// import ProtectedRoute from "./Protected";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Логин беті */}
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

//         {/* Қорғалған маршруттар */}
//         <Route 
//           path="/users" 
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Users />
//             </ProtectedRoute>
//           } 
//         />
        
//         <Route 
//           path="/user/:id"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <UserProfile />
//             </ProtectedRoute>
//           } 
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;










import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Users from "./Users";
import UserProfile from "./UserProfile";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import Profile from "./UserProfile";
import Settings from "./Settings";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Логин беті */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Қорғалған маршруттар */}
        <Route 
          path="/users" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Users />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/user/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfile />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/dashboard/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;