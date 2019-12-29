import React from 'react';

export default function AnswerLayout(props) {
    let classStyle = ['answer'];

    if (props.selected) {
        classStyle.push('selected');
    }

    return(
        <button value = {props.options} className={classStyle.join(' ')} onClick={props.handleClick}>
            <span className="options">{props.options}.</span> {props.answer}
        </button>
    );

}