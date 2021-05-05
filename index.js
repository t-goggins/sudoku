import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
    /* An individual square which contains a number */
}

class Box extends React.Component {
   /* A 3x3 Box (made up of 9 individual squares)*/ 
}
class Grid extends React.Component {
    /* A 9x9 Grid (made up of 9x Boxes) */
}
class Game extends React.Component {
}


ReactDOM.render(
  <Game />
  document.getElementById('root')
);
