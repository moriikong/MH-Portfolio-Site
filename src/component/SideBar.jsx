import "../style/SideBar.css"
import gh from "../assets/github.svg"
import hh from "../assets/instagram.svg"
import jh from "../assets/linkedin.svg"
import { Link } from "react-router-dom"

function SideBar(){
    return(
        <>
            <div className="sidebar-container">
                <h1>Morii</h1>

                <ul>
                    <li>
                        <Link to="/" className="link">
                            HOME
                        </Link>
                    </li>

                    <li>
                        <Link to="about/" className="link">
                            ABOUT
                        </Link>
                    </li>

                    <li>
                        <Link to="contact/" className="link">
                            CONTACT
                        </Link>
                    </li>
                </ul>
                
                <div className="img-container">
                    <img src={gh}></img>
                    <img src={hh}></img>
                    <img src={jh}></img>
                </div>
                
                <h5>Copyright &copy; 2024 Morii Kong. All right reserved.</h5>

            </div>
        </>
    )
}

export default SideBar