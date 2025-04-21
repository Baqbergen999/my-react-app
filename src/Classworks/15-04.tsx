import { useReducer,useEffect } from "react";
import './15-04.css'

const initialState = {
    loading: false,
    data: null,
    error: '',
}

function FetchReducer(state: any, action: any) {
    switch (action.type) {
        case 'start':
            return {
                ...state,
                loading: true,
                error: ''
            };
        case 'success':
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case 'error':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
        }
}

export default function Reducer_2() {
    const [state, dispatch] = useReducer(FetchReducer, initialState)

    useEffect(() => {
        async function fetchData() {
            try{
                dispatch({type: 'start'})
                const responce = await fetch('https://fakestoreapi.com/products')
                const data = await responce.json()
                console.log(data);
                
                dispatch({type: 'success', payload: data})
            } catch (error) {
                dispatch({type: 'error', payload:'Not Found'})   

            }
        }
    fetchData()
    }, [])
    return(
        <>
            <h1>Fetching API</h1>
            {state.loading && <h2>Loading...</h2>}
            {state.error && <h2>{state.error}</h2>}
            {state.data && (
                <div className="cards">
                    {state.data.map((item: any) => (
                        <div key={item.id} className="card">
                            <h2>{item.title}</h2>
                            <img src={item.image} alt="" />
                            <p>{item.category}</p>
                            <p>Price: {item.price}</p>
                        </div>
                    ))}
                </div>
            )}
            {state.data && <h2>{state.data.length} items found</h2>}
        </>
    )
}
