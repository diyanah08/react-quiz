import React, {useState} from 'react';

import Progress from "../components/progress.js"
import Question from "../components/question.js"
import Answers from "../components/answers.js"
import {addSubtractQuestions} from "../questionsAPI/addSubtractQuestions"

import '../App.css';

function AdditionAndSubtraction() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState('');
  const [showResults, setShowResults] = useState(false);

  const question = addSubtractQuestions[currentQuestion];
  
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

    if (currentQuestion + 1 < addSubtractQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    setShowResults(true);
  };

  const restart = () => {
    setAnswers([]);
    setCurrentAnswer('');
    setCurrentQuestion(0);
    setShowResults(false);
  }

  const resultMark =  (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className = "correct">Correct</span>
    } else {
      return <span className = "incorrect">Incorrect</span>
    }
  }

  const resultsTotal = () => {
    return answers.map ( answer => {
      const question = addSubtractQuestions.find(
        question => question.id === answer.questionId
      );

      return <div key = {question.id}> {question.question} - {resultMark(question, answer)}</div>
    });
  };

  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul>{resultsTotal()}</ul>
        <button className="submit" onClick={restart}>Restart Quiz</button>
      </div>
    )


  } else {
    return (
      <div className="container">
        <Progress total={addSubtractQuestions.length} current={currentQuestion + 1}/>
        <Question question={question.question}/>
        <Answers question ={question} currentAnswer={currentAnswer} handleClick={handleClick}/>
        {noClick()}
        <button className="submit" onClick={confirmButton}>Confirm</button>
      </div>
    );
  }
}

export default AdditionAndSubtraction;