import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class StarWars extends React.Component {
  constructor (props) {
    super(props);
    this.resetState = {
      characters: [],
    }
    this.state = {...this.resetState};
  }

  componentDidMount () {
    fetch('https://swapi.co/api/people/')
      .then((response) => response.json())
      .then((responseJson) => {
        return this.setState({characters: responseJson.results});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderCharacterData () {
    if (this.state.characters) {
      return this.state.characters.map((character, index) => {
        return (
          <tr key={`Row-${index}`}>
            <td key={`Name-${index}`} data-characterName={character.name} className='name'>{character.name}</td>
            <td key={`Spacer-${index}`} data-characterName={character.name} className='spacer'>.</td>
            <td key={`Gender-${index}`} data-characterName={character.name} className='gender'>{character.gender}</td>
            <td key={`Eyes-${index}`} data-characterName={character.name} className='eyes'>{character.hair_color}</td>
            <td key={`Hair-${index}`} data-characterName={character.name} className='hair'>{character.eye_color}</td>
            <td key={`year-${index}`} data-characterName={character.name} className='year'>{character.birth_year}</td>
          </tr>
        );
      });
    }
  }

  render () {
    return (
      <div className='app'>
        <h2 id='title'>Star Wars Trivia Matchup</h2>
        <table>
          <tbody>
            {this.renderCharacterData()}
          </tbody>
        </table>

      </div>
    );
  }
}


ReactDOM.render(<StarWars />, document.getElementById('game'));

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
