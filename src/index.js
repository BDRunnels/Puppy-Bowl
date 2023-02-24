import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AllDogs, Home, SingleDog } from "./components";

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
                    <header> 
                        <h1> Puppy Bowl </h1>
                    </header>

                    
                    

                    <Routes>
                        <Route path="/players" element={<AllDogs dogProps={dogs}/>} />

                        <Route path="/players/:idNumber" element={<SingleDog dogProps={dogs}/>} />

                        <Route path="/" element={<Home dogProps={dogs}/>} />

                    </Routes>
               
            </div>


        </BrowserRouter>
    )
}


createRoot(document.getElementById("app")).render(<App />)