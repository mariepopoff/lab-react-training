import "./LikeButton.css"

import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        count: 0,
      };
    
      handleClick = () => {
        this.setState(
          {
            count: this.state.count + 1 
          }
        );
      };
    
      render() {
        const { count } = this.state;
        return (
          <div className="button">
            <button onClick={(evt) => this.handleClick()}>{count} Likes</button>
          </div>
        );
      }
}

