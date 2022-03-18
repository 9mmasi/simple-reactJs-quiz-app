import React,{useContext} from 'react';
import { QuizContext } from '../context/context';
import Questions from '../data';


function EndPage() {
  const{score,setScore,setQuizGame}=useContext(QuizContext);
  const reset=()=>{
    setQuizGame("menu");
    setScore(0)
  }
  return (
    <div>
      <h1>Quiz finished</h1>
      <h3>Score: {score}/{Questions.length}</h3>
      <button className="reset_btn" onClick={reset}>Reset quiz Challenge</button>
    </div>
  );
}

export default EndPage;
