import { createContext, useReducer, useContext } from "react";
import ProductList from "./ProductList";
import Cart from "./CleanCart";
import './Style.css';

const CartContext = createContext();

export default function App() {
    const initialState = {
        cart: [],
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_ITEM":
                return {
                    cart: [
                        ...state.cart,
                        {
                            id: Date.now(),
                            title: action.payload.title,
                            price: action.payload.price,
                        },
                    ],
                };
            case "REMOVE_ITEM":
                return {
                    cart: state.cart.filter((item) => item.id !== action.payload),
                };
            case "CLEAR_CART":
                return {
                    cart: [],
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            <div>
                <h1>Shopping Cart</h1>
                <ProductList />
                <Cart />
            </div>
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
