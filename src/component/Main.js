import React, { Component } from "react";
import Form from "./Form";
import ResultDisplay from "./ResultDisplay";
import "./Main.css";

class TPCalculator extends Component {

    state = {
        numRolls: 1,
        sheetsPerRoll: 500,
        tripsPerDay: 3,
        wipesPerTrip: 3,
        sheetsPerWipe: 4,
        peopleInHouse: 1,
        daysLeft: 18,
        advanced: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
          }, () =>  {
            const sheetsLeft = this.state.numRolls * this.state.sheetsPerRoll;
            const sheetsPerDay = this.state.tripsPerDay * this.state.wipesPerTrip * this.state.sheetsPerWipe * this.state.peopleInHouse;
            const daysLeft = parseInt(sheetsLeft/sheetsPerDay)
        
            this.setState({
              daysLeft
            });
          })
      }

      handleAdvancedSettings = event => {
          event.preventDefault();

        if(this.state.advanced === true) {
            this.setState({
                advanced: false
            })
        } else {
            this.setState({
                advanced: true
            })
        }

      }

    render() {
        return (
            <article>
                <header>Toilet Paper Predictor</header>
                <ResultDisplay
                    daysLeft={this.state.daysLeft}
                />
                <Form 
                    state={this.state}
                    handleInputChange={this.handleInputChange}
                    handleAdvancedSettings={this.handleAdvancedSettings}  
                />
            </article>
        )
    }

}

export default TPCalculator;