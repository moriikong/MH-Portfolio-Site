import "../style/InterestCard.css"

function InterestCard(props){

    return(
        <>
            <div className="interest-card-container">
                <img src={props.imgUrl}></img>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </>
    )
}

export default InterestCard 