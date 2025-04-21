import { useCart } from "./App";

export default function ProductList() {
    const { dispatch } = useCart();

    const products = [
        { id: 1, title: "Mango", price: 500  },
        { id: 2, title: "Orange", price: 250 },
        { id: 3, title: "Apple", price: 400 },
    ];

    return (
        <div className="product-list">
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id }  className="product-list-i">
                    <span>{product.title} - ${product.price}</span>
                    <button
                        onClick={() =>
                            dispatch({ type: "ADD_ITEM", payload: product })
                        }
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}
