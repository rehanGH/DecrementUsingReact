import React, { Component } from "react"

class Decrement extends Component{
    constructor(props){
        super(props)
        this.state = {number: props.start};
    }

    handleDecrement = (State)=> {
        if(this.state.number === 0){
            return alert("Can't be less than zero!")
        }
        this.setState({number: this.state.number - 1})
    }
    render(){
        return(
            <>
            <div>
                <p>{this.StaticRange.number}{""}</p>
                <button onClick={() => this.handleDecrement(this.state)}>
                    Decrement
                </button>
            </div>
            </>
        );
    }
}


export default Decrement;