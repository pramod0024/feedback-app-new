import {FaTimes,FaEdit} from 'react-icons/fa'
import {useState,useContext} from 'react'
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';
function FeedbackItems(props) {

    const { handledelfeedback,editFeedback } = useContext(FeedbackContext)

    const [rating, setRating] = useState(props.items.rating);
    const [text, setText] = useState(props.items.text);
    const [id, setId] = useState(props.items.id)

 
    return (
        <Card>
            <div className="num-display">{rating}</div>    
            <button onClick={()=> handledelfeedback(id)} className='close'>
                <FaTimes color='purple'/>
            </button> 
            <button className='edit' onClick={()=> editFeedback(props.items)} >
                <FaEdit color='purple'/>
            </button>       
            <div className="text-display">{text}</div>
        </Card>
    )
}


export default FeedbackItems
