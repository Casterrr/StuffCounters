import React, { useState, useEffect } from 'react';

import './styles.css';
export default function Counter(props) {
    /* const [counters, setCounters] = useState([]);
    const name = document.querySelector('input[name="name"]').value;

    function addCounters(){

    }
 */
    function increaseNumber(id){
        const screenElement = document.querySelector(`input[name="screen-value-${id}"`)

        const screenValue = parseInt(screenElement.value)

        screenElement.value = screenValue + 1;
    }

    function decreaseNumber(id){
        const screenElement = document.querySelector(`input[name="screen-value-${id}"`)

        const screenValue = parseInt(screenElement.value)

        if (screenValue === 0) return
        screenElement.value = screenValue - 1;
    }
    
    return (
        <div key={props.counter.id} className="counter-interface">
            <p>{props.counter.name}</p>
            <div className="counter-screen">
                <input id={props.counter.id} name={`screen-value-${props.counter.id}`} defaultValue="0"/>
            </div>
            <div className="buttons">
                <button onClick={() => {decreaseNumber(props.counter.id)}} className="min">-</button>
                <button onClick={() => {increaseNumber(props.counter.id)}} className="max">+</button>
            </div>
        </div>
    )
    
}