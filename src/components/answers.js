import React from 'react';

import AnswerLayout from "./answerLayout.js"

export default function Answers(props) {
    return(
        <>
            <AnswerLayout options="a" answer={props.question.answer_a}/>
            <AnswerLayout options="b" answer={props.question.answer_b}/>
            <AnswerLayout options="c" answer={props.question.answer_c}/>
            <AnswerLayout options="d" answer={props.question.answer_d}/>
        </>
    );

}