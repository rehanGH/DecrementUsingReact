import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Decrement.css"

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.start };
  }

  handleDecrement = (state) => {
    if (state.number === 0) {
      return alert("Cannot be less than zero!"); 
    }
    this.setState({ number: state.number - 1 });
  };

  render() {
    return (
      <div>
        {this.state.number}{" "}
        <button className="button1" onClick={() => this.handleDecrement(this.state)}>
          <p className="Dtext">Decrement</p>
        </button>
      </div>
    );
  }
}

Decrement.propTypes = {
  start: PropTypes.number.isRequired,
};

export default Decrement;