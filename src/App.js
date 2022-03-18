//import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import MainMenu from "./components/MainMenu"
import EndPage from "./components/EndPage"
import Quiz from "./components/Quiz"
import svg from "./layered-peaks-haikei.svg"
import {QuizContext} from "./context/context"




function App() {
  const[QuizGame,setQuizGame]=useState("menu");
  const[score,setScore]=useState(0);
  return (
    <React.Fragment>
       <div  className="container">
     
       <h4 className='title'>Simple Quiz App</h4>
       
     <QuizContext.Provider value={{
       QuizGame,setQuizGame,score,setScore
     }}>
     {QuizGame === "menu" && <MainMenu />}
     {QuizGame === "quiz" && <Quiz />}
     {QuizGame === "score" && <EndPage />}
     </QuizContext.Provider>
     
     
    
     
    
    
    
    </div>
    <div className="wave">
     <img src={svg} alt="svg" />

       </div>
    
    
    </React.Fragment>
   
  );
}

export default App;
