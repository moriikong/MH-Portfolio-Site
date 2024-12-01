import "../style/Contact.css"
import uni from "../assets/uni.jpg"
import em from "../assets/email.svg"
import pn from "../assets/phone.svg"
import file from "../assets/file.svg"
import { Link } from "react-router-dom"

function OpenFile(){
    document.getElementById('fileInput').click();
    console.log("fuck")
}

function ContactInfo(props){

    return(
        <>
            <div className="contact-info">
                <img src={props.imgUrl}></img>
                <p>{props.info}</p>
            </div>
        </>
    )
}

function Contact(){
    return(
        <>
            <div className="contact-container">
                <div className="contact-intro">
                    <div className="contact-title">
                        <h1>Contact</h1>
                        <h2>REACH OUT ME</h2>
                        <h3>University Malaysia Sarawak (UNIMAS) Kuching or Sibu Sarawak</h3>

                        <div className="contact-img">
                            <ContactInfo 
                                imgUrl={em}
                                info="kongminhuey02@gmail.com"
                            />

                            <ContactInfo 
                                imgUrl={pn}
                                info="016-653 3185"
                            />
                        </div>
                    </div>

                    <img src={uni}></img>

                
                </div>

                <div className="contact-project">
                    <h1>Any Project?</h1>
                    
                    <div>
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Email"></input>
                        
                    </div>
                    
                    <input className="contact-project-msg" type="text" placeholder="Message"></input>
                    
                    <div className="file-btn" onClick={OpenFile}>
                        <img src={file}></img>
                        <p>Upload File </p>
                    </div>

                    <input type="file" id="fileInput" style={{display:"none"}}></input>

                    <button>
                        Submit
                    </button>
                    
                
                </div>

            </div>
          

            
            
        </>
    )
}

export default Contact