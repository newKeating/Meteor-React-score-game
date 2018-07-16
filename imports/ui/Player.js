import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

class Player extends Component {
  render() {
    return (
      <p key={this.props.player._id}>
        {this.props.player.name} has {this.props.player.score} point(s).
        <button onClick={() => {
          Players.update(this.props.player._id, {
            $inc: { score: 1 }
          });
        }}>+1</button>
        <button onClick={() => {
          Players.update(this.props.player._id, {
            $inc: { score: -1 }
          });
        }}>-1</button>
        <button onClick={() => { Players.remove(this.props.player._id) }}>X</button>
      </p>
    );
  }
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;
