import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * An individual square which contains a number 
 */
function Square(props){
  return (
    <button className="square">
      {props.value}
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
      // TEST
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }

  renderSquare(i) {
    return <Square value={this.state.values[i]} />
  }

  render() {
    return (
      <div className="box">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
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
    }
  }

  render() {
    return (
      <div>
        <Grid />
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
