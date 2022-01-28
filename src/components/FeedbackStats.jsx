import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats(props) {
 
    const { feedback } = useContext(FeedbackContext);

    let average = feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0)/feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')
    return (
        <div className="feedback-stats">
            <div>Review : {feedback.length}</div>
            <div>Average : {isNaN(average) ? 0:average}</div>
        </div>
    )
}

export default FeedbackStats
