import React from 'react';

import AnswerLayout from "./answerLayout.js"

export default function Answers(props) {
    return(
        <>
            <AnswerLayout options="a" answer={props.question.answer_a} handleClick={props.handleClick} selected={props.currentAnswer === 'a'}/>
            <AnswerLayout options="b" answer={props.question.answer_b} handleClick={props.handleClick} selected={props.currentAnswer === 'b'}/>
            <AnswerLayout options="c" answer={props.question.answer_c} handleClick={props.handleClick} selected={props.currentAnswer === 'c'}/>
            <AnswerLayout options="d" answer={props.question.answer_d} handleClick={props.handleClick} selected={props.currentAnswer === 'd'}/>
        </>
    );

}