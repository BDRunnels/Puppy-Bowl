import { useParams } from "react-router-dom";

const SingleDog = (props) => {
    const { idNumber } = useParams();
    
    // console.log(idNumber)
    const selectedDog = props.dogProps.id
    console.log(selectedDog)
    return (
        <div>
            <h3> Name: {selectedDog} </h3>
        </div>
    )
}

export default SingleDog;
