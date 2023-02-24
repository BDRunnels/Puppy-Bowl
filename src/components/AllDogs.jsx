import { Link } from "react-router-dom";
import { useState } from "react";

const AllDogs = (props) => {

    const { dogProps } = props;
    const [searchForSingleDog, setSearchForSingleDog] = useState("");

    let dogsSearch = dogProps.filter((singleDog) => {
        return singleDog.name.toLowerCase().includes(searchForSingleDog.toLowerCase())
    })
    return (
        <div className="flex">
            <button /* className="allButtons" onClick={() => {
                allButtons.style.visibility = "visible";
            }} */><Link to="/"> Home Page </Link></button>
            <h2> List of Available Players </h2>
            <input
                    type="text"
                    placeholder="Search for a Player Here"
                    onChange={(event) => {
                        console.log(event.target.value)
                        setSearchForSingleDog(event.target.value);
                    }}
            ></input>
      
            <section className="playersFlex">
            {
                        dogsSearch.length ? dogsSearch.map((singleDog, index) => {
                            return (
                                <div key={index}> 
                                    <h3> Name : {singleDog.name} </h3>
                                    <p>  Information for {singleDog.name} below! </p>
                                    <img src={singleDog.imageUrl} className="individualDog"/>
                                    <br/>
                                    <button className="allDogButtons"> <Link to={`/players/${singleDog.id}`}> Details! </Link></button>
                                </div>
                            ) 
                        }) : <h2> No available players with that letter! Try your search again. </h2>
            }
            </section>
        </div>
    )
}

export default AllDogs;