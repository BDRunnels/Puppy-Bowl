import { useParams, Link } from "react-router-dom";


const SingleDog = (props) => {
    const { idNumber } = useParams();
    
    
    const selectedDogArray = props.dogProps.filter((singleDog) => {
                
            return idNumber == singleDog.id
})

    const selectedDog = selectedDogArray[0]


    console.log(selectedDogArray)
    return (
        <div className="flex">
            <button className="allButtons"> <Link to="/players"> Player List </Link></button>

            <h2> Name: {selectedDog.name} </h2>
            <h2> Breed: {selectedDog.breed} </h2>
            <h2> Status: On the {selectedDog.status} </h2>
            <h2> <img src={selectedDog.imageUrl} alt="Anise" id="individualDogPage"></img> </h2>
            

        </div>




    )
}

export default SingleDog;
