import React from "react";
import "./Input.css"

function Input(props) {
    let display = "show";
    if(!props.advanced && props.advanced !== undefined) {
        display = "hide"
    }

    return (
        <section className={display}>
            <hr></hr>
            <label htmlFor={props.name}>{props.description}: {props.value}</label>
            <br></br>
            <input
                type="range"
                value={props.value}
                onChange={props.handleInputChange}
                name={props.name}
                id={props.name}
                min={props.min || "0"}
                max={props.max}
                step={props.step || "1"}
            />
        </section>
    )
}

export default Input