import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * An individual square which contains a number 
 */
function Square(){
  return (
    <button className="square">
      X
    </button>
  );
}


/**
 * A 3x3 Box (made up of 9 individual squares)
 */
class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.boxes
    }
  }

  renderSquare() {
    return <Square />
  }

  render() {
    return (
      <div className="box">
        {this.renderSquare()}
        {this.renderSquare()}
        {this.renderSquare()}
        {this.renderSquare()}
        {this.renderSquare()}
        {this.renderSquare()}
        {this.renderSquare()}
        {this.renderSquare()}
        {this.renderSquare()}
      </div>
    );
  }
}

class Grid extends React.Component {
  /* A 9x9 Grid (made up of 9x Boxes) */
  render() {
    return (
      <div className="grid">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array(9).fill(null)
    }
  }

  render() {
    return (
      <div>
        <Grid boxes={this.state.boxes}/>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
