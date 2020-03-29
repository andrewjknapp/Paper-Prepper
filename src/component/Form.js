import React from "react";
import Input from "./Input";
import "./Form.css"

function Form(props) {
    const {
            numRolls,
            sheetsPerRoll,
            tripsPerDay,
            wipesPerTrip,
            sheetsPerWipe,
            peopleInHouse,
            advanced
        } = props.state;


    return(
        <form>
            <Input 
                name="numRolls"
                value={numRolls}
                description="Number of Rolls"
                handleInputChange={props.handleInputChange}
                max="100"
            />
            <Input
                name="peopleInHouse"
                value={peopleInHouse}
                description="People in House"
                handleInputChange={props.handleInputChange}
                min="1"
                max="20"
            />
            <Input
                name="sheetsPerRoll"
                value={sheetsPerRoll}
                description="Sheets per Roll"
                handleInputChange={props.handleInputChange}
                max="2000"
                step="10"
                advanced={advanced}
            />
            <Input
                name="tripsPerDay"
                value={tripsPerDay}
                description="Trips to Bathroom per Day"
                handleInputChange={props.handleInputChange}
                min="1"
                max="20"
                advanced={advanced}
            />
            <Input
                name="wipesPerTrip"
                value={wipesPerTrip}
                description="Wipes per trip to Bathroom"
                handleInputChange={props.handleInputChange}
                min="1"
                max="20"
                advanced={advanced}
            />
            <Input
                name="sheetsPerWipe"
                value={sheetsPerWipe}
                description="Sheets used per Wipe"
                handleInputChange={props.handleInputChange}
                min="1"
                max="15"
                advanced={advanced}
            />
            <hr></hr>
            <div className="advanced" onClick={props.handleAdvancedSettings}>{advanced ? "View Less" : "Advanced Settings"}</div>
        </form>
    )
        
}

export default Form;