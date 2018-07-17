import React, { Component } from 'react';

import {Players} from './../api/players';

class AddPlayer extends Component {
  handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if (playerName) {
      e.target.playerName.value = '';

      Players.insert({
        name: playerName,
        score: this.props.score
      });
    }
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;