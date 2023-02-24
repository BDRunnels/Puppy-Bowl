import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div className="flex">
            <button /* className="allButtons" onClick={() => {
                        allButtons.style.visibility = "visible" ? allButtons.style.visibility = "hidden" : allButtons.style.visibility = "visible"
                    }} */> <Link to ="/players"> Player List </Link></button>
            {
            props.dogProps.teamId ? <h2> Welcome to Team {props.dogProps[0].teamId}'s Page! </h2> : <h2> Uh-oh, data didn't load. </h2>
            }
            <h2> Puppy Bowl Champions 2022-2023!</h2>
            <img src="https://cdn.pixabay.com/photo/2014/03/25/16/27/football-297151__340.png" alt="Football" />
        </div>
        

    )
}

export default Home; 