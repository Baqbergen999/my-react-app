import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export default function SuperheroSearchApp() {
    const [heroes, setHeroes] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredHero, setFilteredHero] = useState(null);
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        axios
            .get("https://akabab.github.io/superhero-api/api/all.json")
            .then((response) => {
                setHeroes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleSearch = () => {
        const hero = heroes.find((h) =>
            h.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredHero(hero || null);
        setIsSearched(true);
    };

    return (
        <div className="container">
            <h1>Супергерой Іздеу</h1>
            <input
                type="text"
                placeholder="Геройдың атын жазыңыз"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                Іздеу
            </button>

            {filteredHero ? (
                <div className="hero-info">
                    <h2>{filteredHero.name}</h2>
                    <img
                        src={filteredHero.images.lg}
                        alt={filteredHero.name}
                    />
                    <p>
                        <strong>Толық аты:</strong> {filteredHero.biography.fullName || "Белгісіз"}
                    </p>
                    <p>
                        <strong>Туған жері:</strong> {filteredHero.biography.placeOfBirth || "Белгісіз"}
                    </p>
                    <p>
                        <strong>Күші:</strong> {filteredHero.powerstats.strength || "Белгісіз"}
                    </p>
                    <p>
                        <strong>Жылдамдығы:</strong> {filteredHero.powerstats.speed || "Белгісіз"}
                    </p>
                </div>
            ) : (
                isSearched && <p className="error-message">Герой табылмады!</p>
            )}
        </div>
    );
}
