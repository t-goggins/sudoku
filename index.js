import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(){
  /* An individual square which contains a number */
  return (
    <button>
      "X"
    </button>
  );
}

class Box extends React.Component {
  /* A 3x3 Box (made up of 9 individual squares)*/ 
  renderSquare() {
    return <Square />
  }

  render() {
    return (
      <div style={{ border: "2px solid black", display: "grid"}}>
        <div className="box-row" style={{ border: "2px solid blue", display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
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
      </div>
    );
  }
}

class Grid extends React.Component {
  /* A 9x9 Grid (made up of 9x Boxes) */
  renderBox() {
    return <Box />
  }

  render() {
    return (
      <div className="grid-row" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
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
  render() {
    return (
      <div style={{ width: "400px", height: "400px"}}>
        <Grid />
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
