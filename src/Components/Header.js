
import { NavLink } from "react-router-dom"
import './Components.scss';

function Header(){
    return(
        <>
        <div className="header">
            <div className="logo">Preeti</div>
           <div className="nav"> <span><NavLink to="/">Home</NavLink></span>
           <span> <NavLink to="/about">About</NavLink></span>
           <span><NavLink to="/contact">Contact</NavLink></span>
           </div>
        </div>
        </>
    )
}


export default Header