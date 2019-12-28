import React from 'react';

import Progress from "./components/progress.js"
import Question from "./components/question.js"
import Answers from "./components/answers.js"
import {quizQuestions} from "./questionsAPI/quizQuestions.js"

import './App.css';

function App() {
  const question = quizQuestions[0];

  return (
    <div className="container">
      <Progress total="3" current="1"/>
      <Question question={question.question}/>
      <Answers question ={question}/>
      <button className="submit">Confirm</button>
    </div>
  );
}

export default App;
