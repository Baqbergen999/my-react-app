import { CartProvider } from "./Aralyq-baqylau-10/CleanCart";
import ProductList from "./Aralyq-baqylau-10/ProductList";
import App from "./Aralyq-baqylau-10/App";

export default function App() {
  return (
    <CartProvider>
      <div>
        <h1>B/X Shopping Cards</h1>
        <ProductList />
        <App />
      </div>
    </CartProvider>
  );
}
