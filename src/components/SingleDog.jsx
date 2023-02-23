import { useParams } from "react-router-dom";

const SingleDog = (props) => {
    const { idNumber } = useParams();
    
    
    const selectedDogArray = props.dogProps.filter((singleDog) => {
                
            return idNumber == singleDog.id
})

    const selectedDog = selectedDogArray[0]

    console.log(selectedDogArray)
    return (
        <div>
            <h3> Name: {selectedDog.name} </h3>
            
        </div>
    )
}

export default SingleDog;
