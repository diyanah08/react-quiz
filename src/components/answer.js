import React from 'react';

export default function Answer(props) {
    return(
        <button value = {props.options}>
            <span className="options">{props.options}.</span> {props.answer}
        </button>
    );

}