import React,{useState,useContext} from 'react';
import Questions from "../data"
import {QuizContext} from "../context/context"



function Quiz() {
  const[CurrentQuestion,setCurrentQuestion]=useState(0);
  const[choice,setChoice]=useState("")
  const{score,setScore}=useContext(QuizContext);
  const{setQuizGame}=useContext(QuizContext);

/* { const totalScore=()=>{
    if(Questions[CurrentQuestion].answer===Choice){
      setScore(score + 1)
    }
  }}*/
  const nextQuestion=()=>{
    if(Questions[CurrentQuestion].answer===choice){
      setScore(score + 1)
    }
   
    
    setCurrentQuestion(CurrentQuestion+1);
    
    
  }
  const finishQuestion=()=>{
    if(Questions[CurrentQuestion].answer===choice){
      setScore(score + 1)
    }
  setQuizGame("score")

  }
  return (
    <div className='quiz'>
      <h1>{Questions[CurrentQuestion].question}</h1>
      <button type="radio" onClick={()=>{setChoice("choiceA")}}>{Questions[CurrentQuestion].choiceA}</button>
      <button type="radio" onClick={()=>{setChoice("choiceB")}}>{Questions[CurrentQuestion].choiceB}</button>
      <button type="radio" onClick={()=>{setChoice("choiceC")}}>{Questions[CurrentQuestion].choiceC}</button>
      <button type="radio" onClick={()=>{setChoice("choiceD")}}>{Questions[CurrentQuestion].choiceD}</button>
      {CurrentQuestion===Questions.length-1?(<button onClick={finishQuestion} className='next_button'>finish</button>):( <button className='next_button' onClick={nextQuestion}>Next_Question</button>)}
     
    </div>
  );
}

export default Quiz;
