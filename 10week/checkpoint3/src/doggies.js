import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class DogCard extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="">
                <img src={this.props.image}/>
                <p>{this.props.name}</p>

            </div>
        );
      }
}

export default DogCard;
