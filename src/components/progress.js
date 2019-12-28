import React from 'react';

export default function Progress(props) {
    return(
        <h3>
            Question {props.current} of {props.total}
        </h3>
    );

}