import React from 'react';

export default function AnswerLayout(props) {
    return(
        <button value = {props.options} className="answer">
            <span className="options">{props.options}.</span> {props.answer}
        </button>
    );

}