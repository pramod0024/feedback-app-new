import {useState,useContext,useEffect} from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm(props) {

    const { addfeedback,feedbackEdit,updateFeedback } = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [btnDisabled, setDisabled] = useState(true);
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(()=>{

        if(feedbackEdit.edit === true){
            setDisabled(false)
            setText(feedbackEdit.items.text)
        }
    },[feedbackEdit]);
   
    const hanldeclick =(e)=>{
        if(text ==''){
            setDisabled(true)
            setMessage(null)
        }else if(text != '' && text.trim().length <=10){
            setMessage('Text must be at least 10 character');
            setDisabled(true)
        }else{
            setMessage(null)
            setDisabled(false)
        }
        console.log(e.target.value);
        setText(e.target.value)
    }
  
    const selected = (selectedValue) =>{
        setRating(selectedValue);
    }
  
  const handleSubmit = (e)=>{
    
    e.preventDefault();
      if(text.length >= 10){
          const newFeedback ={
              text,
              rating
          }    

          if(feedbackEdit.edit === true){
              updateFeedback (feedbackEdit.items.id,newFeedback)
          }else{
            addfeedback(newFeedback)  
          }
      }

      setText('');
      
     
  }
   
    return (
        <Card>
            <form onSubmit={ handleSubmit }>
                <h2>How would you rate youe service wih us?</h2>
                <RatingSelect selected={selected}></RatingSelect>
                <div className="input-group">
               
                <input onChange={ hanldeclick} type="text" placeholder="Write a review" value={text}></input>
                {/* <button type="submit">Send</button> */}
                <Button type="submit" isDisabled ={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
                
            </form>
        </Card> 
    )
}

export default FeedbackForm
