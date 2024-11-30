import "../style/Home.css"
import pt from "../assets/photo1.jpg"
import { Link } from "react-router-dom"

function Home(){
    return(
        <>
            <div className="home-container">

                <div className="home-intro">
                    <div className="home-title">
                        MY NAME IS
                        <em>KONG<br></br>MIN HUEY...</em>
                    </div>

                    <img src={pt}></img>
                    
                </div>

                <h3>Computational Science Student</h3>
                
                
                <button>
                    
                    <Link to="about/" className="link">
                        About Me
                    </Link>
                
                </button>
            </div>
            
        </>
    )
}

export default Home