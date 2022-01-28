import { createContext,useState } from "react";
import { v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ( { children } )=>{   

    const [feedbackEdit, setFeedbackEdit]  = useState({
        items :{},
        edit : false
    })

       const [ feedback, setFeedback] = useState(
        [{
            id: 1,
            rating: 10,
            text: 'Pramod ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },          
          {
            id: 3,
            rating: 8,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          }]
       )

       

     const addfeedback =(newfeedback)=>{
        newfeedback.id = uuidv4();
        setFeedback ([newfeedback, ...feedback]);
    }

       const handledelfeedback = (id)=>{
        if(window.confirm('Are you sure you want to delete ?')){
         setFeedback(feedback.filter((item)=>{
           return item.id !== id;
          }))
        }       
   }

   const editFeedback = (items)=>{
    setFeedbackEdit({
        items,
        edit:true
    })
    }

  const updateFeedback = (id,upItem)=>{   

    setFeedback(feedback.map((item)=>item.id === id ? {item,...upItem} :item))
    // setFeedback(
    //     feedback.map((item)=>(
    //  item.id===id ? {...item,...upItem} : item
    // )))
   // console.log(id,upItem);
  }

     return <FeedbackContext.Provider value ={{
        feedback,
        handledelfeedback,
        addfeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
     }}>
         { children }
     </FeedbackContext.Provider>
}

export default FeedbackContext