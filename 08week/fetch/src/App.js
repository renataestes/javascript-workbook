import React, { Component } from 'react';
import logo from './logo.svg';
//import { Button, ButtonToolbar, Form } from 'react-bootstrap';
//import 'bootstrap/less/bootstrap.less'
import './App.css';
import CharacterCard from './StarWars';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
           //guessArr: [],
    }
  }

  componentDidMount(){
       fetch('https://swapi.co/api/people/')
          .then((response) => response.json())
          .then((responseJson) => {
            return this.setState({characters: responseJson.results})
            // console.log(characters)
            // return responseJson.results;
          })
          .catch((error) => {
            console.error(error);
          });
    }

    renderCharacters() {
      console.log('in renderCharacters');
      // if(this.state.characters){
      //   return this.state.characters.map((elem, index) =>{
      //       return <CharacterCard key={index} name={elem.name} year={elem.birth_year} />
      //       console.log(CharacterCard['results'][0]['name']['birth_year']);
      //   })
      console.log('characters array', this.state.characters);
      }

  render() {
      // console.log(this.state.characters);
      return (
        <div>

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Star Wars</h2>
        </div>
      </div>

      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {this.renderCharacters()}
      </div>
    </div>
    );
  }
}


export default App;
