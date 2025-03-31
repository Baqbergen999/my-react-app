import { Navigate, Outlet } from "react-router-dom"

export default function Protect () {
    const friend = true;

    return (
        <div>
            {friend ? <Outlet/> : <Navigate to="/" />}
        </div>
    )
}