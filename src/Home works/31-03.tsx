import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import "./31-03.css";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  
  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  if (sortOrder === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container">
      <div className="controls">
        <input 
          type="text" 
          placeholder="Іздеу..." 
          className="input" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <select onChange={(e) => setCategory(e.target.value)} className="select">
          <option value="">Барлық категориялар</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <button className="button" onClick={() => setSortOrder("asc")}>Баға: арзан → қымбат</button>
        <button className="button" onClick={() => setSortOrder("desc")}>Баға: қымбат → арзан</button>
      </div>
      <div className="grid">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="card">
            <img src={product.image} alt={product.title} className="image" />
            <h3 className="title">{product.title}</h3>
            <p className="price">{product.price} $</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => { 
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p className="loading">Жүктелуде...</p>;

  return (
    <div className="container">
      <button onClick={() => navigate("/")} className="back-button">Back to Home</button>
      <div className="product-detail">
        <img src={product.image} alt={product.title} className="image-large" />
        <h1 className="title-large">{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price-large">{product.price} $</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
