import React, { Component } from 'react';
import logo from './logo.svg';
//import { Button, ButtonToolbar, Form } from 'react-bootstrap';
//import 'bootstrap/less/bootstrap.less'
import './App.css';
import CharacterCard from './StarWars';

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

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         characters: [],
//            //guessArr: [],
//     }
//   }
//
//   componentDidMount(){
//        fetch('https://swapi.co/api/people/')
//           .then((response) => response.json())
//           .then((responseJson) => {
//             return this.setState({characters: responseJson.results})
//             // console.log(characters)
//             // return responseJson.results;
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//     }
//
//     renderCharacters() {
//       console.log('in renderCharacters');
//       // if(this.state.characters){
//       //   return this.state.characters.map((elem, index) =>{
//       //       return <CharacterCard key={index} name={elem.name} year={elem.birth_year} />
//       //       console.log(CharacterCard['results'][0]['name']['birth_year']);
//       //   })
//       console.log('characters array', this.state.characters);
//       }
//
//   render() {
//       // console.log(this.state.characters);
//       return (
//         <div>
//
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Star Wars</h2>
//         </div>
//       </div>
//
//       <div className="App">
//         <img src={logo} className="App-logo" alt="logo" />
//         {this.renderCharacters()}
//       </div>
//     </div>
//     );
//   }
// }


export default App;
