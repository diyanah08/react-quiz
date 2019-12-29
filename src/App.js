import React, {useState} from 'react';

import Progress from "./components/progress.js"
import Question from "./components/question.js"
import Answers from "./components/answers.js"
import {quizQuestions} from "./questionsAPI/quizQuestions.js"

import './App.css';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const question = quizQuestions[currentQuestion];
  
  const handleClick = e => {
      setCurrentAnswer(e.target.value);
  };

  return (
    <div className="container">
      <Progress total="3" current="1"/>
      <Question question={question.question}/>
      <Answers question ={question} currentAnswer={currentAnswer} handleClick={handleClick}/>
      <button className="submit">Confirm</button>
    </div>
  );
}

export default App;
