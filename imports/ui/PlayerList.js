import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

export class PlayerList extends Component {
  renderPlayers () {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started!</p>
        </div>
      );
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player} />;
      });
    } 
  };

  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  };
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}

export default PlayerList;
