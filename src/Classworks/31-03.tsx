// import { useState } from "react";

// const Day_1 = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [confirm, setConfirm] = useState('');
    
//     function setUp (e: any) {
//         e.preventDefault(); 
//         if (!email.includes('@')) {
//             setError('@ joq');
//             return;
//         }
//         if (password.length < 6) {
//             setError('Passwords must be at least 6 characters long');
//             return;
//         }

//         setError('');
//         alert('Forma satty tolty');
//     }

//     return (
//         <form onSubmit={setUp}>
//             <input type="text" value={text}/>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
//             <input type="password" value={password} onChange={(e) => setConfirm(e.target.value)} placeholder="Confirm password"/>
//             <button type="submit">Submit</button>
//             {error && <p>{error}</p>}
//         </form>
//     )
// }

// export default Day_1;





















import React, {useState} from "react";
import './31-03.css'


const Login = () =>{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    function setUp(e:any) {
        e.preventDefault();

        const sandar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        for(let ch of username){
            if (sandar.includes(ch)) {
                setError("Username must contain only Strings");
                return;
              }
        }

        if(password !== confirmPassword){
            setError('Password and Confirm Password do not match');
            return;
        }
        if(!email.includes('@')){
            setError('Invalid email address');
            return;
        }
        if(password.length < 6){
            setError('Password must be at least 6 characters long');
            return;
        }
        setError('');
        setIsLoggedIn(true);
        alert('Logged in successfully!');
    }

return(
    <form onSubmit={setUp}>
        <h1>Login</h1>
        <div className="container">
            <div className="input-group">
                <label >Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-group">
                <label >Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
                <label >Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-group">
                <label >Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
        </div>
        <button type="submit">Login</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
        {error=='' && <p style={{color: 'green'}}>Logged in successfully!</p>}
        {error=='' && <p style={{color: 'green'}}>Welcome, {username}!</p>}
    </form>)}

export default Login;