import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';
function App(props) {
  return (
    <FeedbackProvider>
  <Router>     
    <Header></Header>
     <div className="container">
       <Routes>
       <Route exact path='/' element={
         <>
         <FeedbackForm></FeedbackForm>
        <FeedbackStats></FeedbackStats>
        <FeedbackList></FeedbackList>
         </>
       }>
       
      </Route>    
      <Route path='/about' element={<AboutPage/>}>This is the about  route</Route>
       </Routes>
      <AboutIconLink></AboutIconLink>
    </div>   
    </Router>
    </FeedbackProvider>
     
  );
}

export default App;