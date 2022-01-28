
import { useContext } from "react"
import { motion,AnimatePresence } from "framer-motion"
import FeedbackItems from "./FeedbackItems"
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {

    const { feedback } = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
        return(
            <>
            <div>No Feedback yet</div>
            </>
        )
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {
             feedback.map((items)=>
                (
                    <motion.div
                     key={items.id}
                     initial={{ opacity:0}}
                     animate={{ opacity:1}}
                     exit={{opacity:0}}
                    >
                    <FeedbackItems key={items.id} items ={items}></FeedbackItems>

                    </motion.div>
                )
             )
            }
            </AnimatePresence>          
            
        </div>
    )
}

export default FeedbackList
