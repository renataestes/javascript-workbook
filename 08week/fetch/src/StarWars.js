import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CharacterCard extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="card">
                <h2>{this.props.name}</h2>
                <p>{this.props.birth_year}</p>
            </div>
        );
    }
}

export default CharacterCard;

// class Apple extends Component {
//   const url = 'https://swapi.co/api/people/'; // Get 10 random characters
//   fetch(url)
//   .then(function(data) {
//     // Your code for handling the data you get from the API
//  })
//   .catch(function(error) {
//     // This is where you run code if the server returns any errors
// });
//
//   renderList = () => {
//   //   if(this.props.list && this.props.list.length > 0){
//   //     return this.props.list.map((card, index) => {
//   //       return(
//   //         <div key={index}>
//   //         <h2 onClick={() => this.props.handleClick(card.id)}>{card.text}</h2>
//   //         <input style={{visibility: card.isEditable ? 'inherit' : 'hidden',}}
//   //         onChange={(event) => this.props.handleChange(card.id, event.target.value)}
//   //         />
//   //         <p onClick={() => this.props.deleteStatus(card.id)}>X</p>
//   //         </div>
//   //       )
//   //     });
//   //   }
//   // }
//
//   render() {
//     return (
//       <div className="">
//       {this.renderList()}
//       </div>
//     );
//   }
// }
//
// export default Apple;

// const card = (
//   <div>
//   <img src="pics/192940u73.jpg" />
//   <h1>
//     Welcome to Dans Blog!
//   </h1>
//   <article>
//     Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
//   </article>
//    </div>
// );
