import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AllDogs } from "./components";

const App = () => {
    const [dogs, setDogs] = useState([]);

    const [searchForSingleDog, setSearchForSingleDog] = useState("");

    let dogsSearch = dogs.filter((singleDog) => {
        return singleDog.name.toLowerCase().includes(searchForSingleDog.toLowerCase())
    })

    async function fetchData () {
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players")
            const responseData = await response.json();

            setDogs(responseData.data.players);
            console.log(responseData);

        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <BrowserRouter>
            <div>
                    <h1> Puppy Bowl </h1>
                    {/* <input
                    type="text"
                    placeholder="Search for a Player Here"
                    onChange={(event) => {
                        console.log(event.target.value)
                        setSearchForSingleDog(event.target.value);
                    }}
                    ></input> */}
                    <button id="allButton" onClick={() => {
                        allButton.style.visibility = "visible" ? allButton.style.visibility = "hidden" : allButton.style.visibility = "visible"
                    }}> <Link to ="/players"> Click Here for All Players </Link></button>

                    <Routes>
                        <Route path="/players" element={<AllDogs dogProps={dogs}/>} />
                    </Routes>

                    {/* {
                        dogsSearch.length ? dogsSearch.map((singleDog, index) => {
                            return (
                                <div key={index}> 
                                    <h3> Name : {singleDog.name} </h3>
                                    <p>  Is a breed of {singleDog.breed}. </p>
                                    <p>  Is currently on the : {singleDog.status}</p>
                                    <p>  Team: {singleDog.teamId}</p>

                                </div>
                            ) 
                        }) : <h2> No available players with that letter! Try your search again. </h2>
                    } */}
                    





            
            </div>


        </BrowserRouter>
    )
}


createRoot(document.getElementById("app")).render(<App />)