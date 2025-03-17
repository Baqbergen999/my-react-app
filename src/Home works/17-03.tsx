import { useState, useEffect } from "react";
import "./17-03.css"

const products = ["Кітап", "Қалам", "Дәптер", "Сөмке", "Калькулятор"];

const App = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("recentlyViewed");
    if (savedItems) {
      setRecentlyViewed(JSON.parse(savedItems));
    }
  }, []);

  const handleClick = (product: string) => {
    setRecentlyViewed((prev) => {
      const updatedList = [product, ...prev.filter((item) => item !== product)];
      localStorage.setItem("recentlyViewed", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <div className="container">
      <h2>Өнімдер</h2>
      <div className="product-list">
        {products.map((product) => (
          <button key={product} onClick={() => handleClick(product)}>
            {product}
          </button>
        ))}
      </div>
      <h2>Соңғы қаралғандар</h2>
      <ul>
        {recentlyViewed.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
