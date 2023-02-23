import { Link } from "react-router-dom";
import { useState } from "react";

const AllDogs = (props) => {

    const { dogProps } = props;
    const [searchForSingleDog, setSearchForSingleDog] = useState("");

    let dogsSearch = dogProps.filter((singleDog) => {
        return singleDog.name.toLowerCase().includes(searchForSingleDog.toLowerCase())
    })
    return (
        <div>
            <h1> List of Available Players </h1>
            <input
                    type="text"
                    placeholder="Search for a Player Here"
                    onChange={(event) => {
                        console.log(event.target.value)
                        setSearchForSingleDog(event.target.value);
                    }}
            ></input>
            <button onClick={() => {
                allButton.style.visibility = "visible";
            }}><Link to="/"> Home Page </Link></button>
            
            {
                        dogsSearch.length ? dogsSearch.map((singleDog, index) => {
                            return (
                                <div key={index}> 
                                    <h3> Name : {singleDog.name} </h3>
                                    <p>  Individual Stats & Information for : {singleDog.name} below! </p>
                                    <button> <Link to={`/players/${singleDog.id}`}> Details! </Link></button>
                                </div>
                            ) 
                        }) : <h2> No available players with that letter! Try your search again. </h2>
            }

        </div>
    )
}

export default AllDogs;