import React from 'react';

import Progress from "./components/progress.js"
import Question from "./components/question.js"
import Answer from "./components/answer.js"

import './App.css';

function App() {
  return (
    <div className="container">
      <Progress total="3" current="1"/>
      <Question questions="What is the question?"/>
      <Answer options="A" answer="idk"/>
    </div>
  );
}

export default App;
