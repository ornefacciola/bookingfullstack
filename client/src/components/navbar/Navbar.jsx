import "./navbar.css"
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {  useNavigate } from "react-router-dom";
import {useState} from "react";


const Navbar = () => {
    const {user} = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate()

    const handleRegister = () => {
        if(!user){
            navigate("/register")
        }
    }

    const handleClick = () => {
        if(user){
            setOpenModal(true)
        } else {
            navigate("/login")
        }
    };

    const logOut = () => {
        setOpenModal(false)
        localStorage.removeItem('user')
        document.location.reload(true)
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                <span className="logo">yourVoyage</span>
                </Link>
                {user ? <button className="navButton" onClick={logOut}>Log Out {user.username}</button> : (
                    <div className="navItems">
                        <button className="navButton" onClick={handleRegister}>Register</button>
                        <button className="navButton" onClick={handleClick}>Login</button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar