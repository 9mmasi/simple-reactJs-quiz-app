import React,{useContext} from 'react';
import { QuizContext } from '../context/context';

function MainMenu() {
    const{setQuizGame}=useContext(QuizContext);
  return (
    <div className='menu'>
      <button onClick={()=>{setQuizGame("quiz")}}>Start Quiz Challenge</button>
    </div>
  );
}

export default MainMenu;
