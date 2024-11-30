import "../style/About.css"
import pp from "../assets/photo2.jpg"
import ml from "../assets/ml.svg"
import da from "../assets/da.svg"
import InterestCard from "../component/InterestCard"

function About(){
    return(
        <>
            <div className="about-container">
                <h1>About Me</h1>

                <div className="about-intro">
                    <img src={pp}></img>
                    <h2>
                        <em>Computational Science </em>student 
                        with a passion for exploring computational models and algorithms. 
                        I am eager to further enhance my skills, gain hands-on industry experience, 
                        and contribute meaningfully to innovative and impactful projects in the field of computational science.
                        I am highly adaptable, detail-oriented, and thrive in collaborative environments.
                    </h2>
                </div>

                <button>
                    Resume
                </button>
            </div>

             <div className="about-interest">
                    <h1>Interest</h1>

                    <div className="about-interest-content">

                        <InterestCard
                            imgUrl={ml}
                            title="Machine Learning"
                            desc="Identifies hidden patterns in data and Uses them to forecast outcomes or behaviors"
                        />

                        <InterestCard
                            imgUrl={da}
                            title="Data Analytics"
                            desc="Processes and Interprets Data"
                        />

                    </div>
            </div>
        </>
    )
}

export default About