import { useCart } from "./App";

export default function Cart() {
    const { state, dispatch } = useCart();

    const totalPrice = state.cart.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2>Cart</h2>
            {state.cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {state.cart.map((item) => (
                        <li key={item.id}>
                            {item.title} - ${item.price}
                            <button
                                onClick={() =>
                                    dispatch({ type: "REMOVE_ITEM", payload: item.id })
                                }
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalPrice}</h3>
            <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
                Clear Cart
            </button>
        </div>
    );
}
