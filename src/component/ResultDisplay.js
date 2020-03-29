import React from "react";
import "./ResultDisplay.css"

function ResultDisplay(props) {
    return (
        <section className="dayCounter">
            <h1>{props.daysLeft} Days Left</h1>
        </section>
    )
}

export default ResultDisplay;