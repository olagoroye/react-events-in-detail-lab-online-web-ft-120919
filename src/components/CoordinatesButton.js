// Code CoordinatesButton Component Here
import { Component } from 'react'
export default class CoordinatesButton extends React.Component {
 
    handleClick = (event) => {
        let eventTypes = [event.clientX, event.clientY]
        return this.props.onReceiveCoordinates(eventTypes)
    }
   
    render() {
      return (
          <div>
              <button onClick={this.handleClick}></button>
          </div>
        
      );
    }
  }
  