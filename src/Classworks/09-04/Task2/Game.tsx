import { createContext, useContext, useState } from "react";
import "./Game.css";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (game: any) => {
    setCart((prevCart) => [...prevCart, game]);
  };

  const removeFromCart = (gameId) => {
    setCart((prevCart) => prevCart.filter((game) => game.id !== gameId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const games = [
  { id: 1, name: "Asphalt 9", price: 60 },
  { id: 2, name: "Sniper Ghost Warrior 2", price: 40 },
  { id: 3, name: "Red Dead Redemption 2", price: 70 },
];

const GameList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="game-list">
      <h2>Games</h2>
      {games.map((game) => (
        <div key={game.id} className="game-item">
          <h3>{game.name}</h3>
          <p>Price: ${game.price}</p>
          <button onClick={() => addToCart(game)}>Add</button>
        </div>
      ))}
    </div>
  );
};

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Себет</h2>
      {cart.length === 0 ? (
        <p>Basket is empty</p>
      ) : (
        cart.map((game) => (
          <div key={game.id} className="cart-item">
            <div className="game-item">
              <h3>{game.name}</h3>
              <p>Price: ${game.price}</p>
              <button onClick={() => removeFromCart(game.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <h1>Game shop</h1>
        <GameList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
