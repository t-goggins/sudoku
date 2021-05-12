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
  }

  renderSquare(i) {
    return <Square value={i} />
  }

  render() {
    return (
      <div className="box">
        {this.renderSquare( this.props.value[0] ) }
        {this.renderSquare( this.props.value[1] ) }
        {this.renderSquare( this.props.value[2] ) }
        {this.renderSquare( this.props.value[3] ) }
        {this.renderSquare( this.props.value[4] ) }
        {this.renderSquare( this.props.value[5] ) }
        {this.renderSquare( this.props.value[6] ) }
        {this.renderSquare( this.props.value[7] ) }
        {this.renderSquare( this.props.value[8] ) }
      </div>
    );
  }
}

class Grid extends React.Component {
  /* A 9x9 Grid (made up of 9x Boxes) */

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid">
        <Box value={this.props.value[0]}/>
        <Box value={this.props.value[1]}/>
        <Box value={this.props.value[2]}/>
        <Box value={this.props.value[3]}/>
        <Box value={this.props.value[4]}/>
        <Box value={this.props.value[5]}/>
        <Box value={this.props.value[6]}/>
        <Box value={this.props.value[7]}/>
        <Box value={this.props.value[8]}/>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 'X', 1, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
      ]
    }
  }

  render() {
    return (
      <div>
        <Grid value={this.state.value}/>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
