import { NavLink } from "react-router-dom"
export const NavigationComponent = () => {
    return (
        <>
            <nav>
                <NavLink className={"navigation"} to="/">Home</NavLink>
                <NavLink className={"navigation"} to="/blogs">Blogs</NavLink>
                <NavLink className={"navigation"} to="/account">Profile</NavLink>
                <NavLink className={"navigation"} to="/login">Login</NavLink>
            </nav>
        </>
    )
}