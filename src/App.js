import React, {useState} from 'react';

import Progress from "./components/progress.js"
import Question from "./components/question.js"
import Answers from "./components/answers.js"
import {quizQuestions} from "./questionsAPI/quizQuestions.js"

import './App.css';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState('');
  const [showResults, setShowResults] = useState(false);

  const question = quizQuestions[currentQuestion];
  
  const handleClick = e => {
      setCurrentAnswer(e.target.value);
      setError('');
  };

  const noClick = () => {
    if (error) {
      return <div className="error">{error}</div>;
    }

    return;
  }

  const confirmButton = () => {
    const answer = {questionId: question.id, answer: currentAnswer};

    if (!currentAnswer) {
      setError("You didn't click an answer!");
      return;
    }

    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer('');

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    setShowResults(true);
  };

  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
      </div>
    )


  } else {
    return (
      <div className="container">
        <Progress total={quizQuestions.length} current={currentQuestion + 1}/>
        <Question question={question.question}/>
        <Answers question ={question} currentAnswer={currentAnswer} handleClick={handleClick}/>
        {noClick()}
        <button className="submit" onClick={confirmButton}>Confirm</button>
      </div>
    );
  }
}

export default App;
