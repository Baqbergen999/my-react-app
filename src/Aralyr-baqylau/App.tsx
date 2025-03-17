import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
    const [page, setPage] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setName(user.name);
            setLoggedIn(true);
        }
    }, []);

    const Register = (e: any) => {
        e.preventDefault();
        if (name && email && pass) {
            localStorage.setItem("user", JSON.stringify({ name, email, pass }));
            setLoggedIn(true);
            setError("");
        } else {
            setError("Барлық өрістерді толтырыңыз");
        }
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === email && storedUser.pass === pass) {
            setName(storedUser.name);
            setLoggedIn(true);
            setError("");
        } else {
            setError("Қате email немесе пароль");
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    const handleDelete = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
        setName("");
        setEmail("");
        setPass("");
    };

    const handleGuest = () => {
        setName("Guest");
        setLoggedIn(true);
    };

    if (loggedIn) {
        return (
            <div>
                <h1>Қош келдіңіз, {name}!</h1>
                <button onClick={handleLogout}>Шығу</button>
                <button onClick={handleDelete}>Аккаунтты жою</button>
            </div>
        );
    }

    return (
        <div>
            {page === "login" ? (
                <form onSubmit={handleLogin}>
                    <h1>Кіру</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <button type="submit">Кіру</button>
                    <button type="button" onClick={() => setPage("register")}>Тіркелу</button>
                    <button type="button" onClick={handleGuest}>Қонақ ретінде кіру</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </form>
            ) : (
                <form onSubmit={Register}>
                    <h1>Тіркелу</h1>
                    <input
                        type="text"
                        placeholder="Аты"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <button type="submit">Тіркелу</button>
                    <button type="button" onClick={() => setPage("login")}>Кіруге оралу</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </form>
            )}
        </div>
    );
}