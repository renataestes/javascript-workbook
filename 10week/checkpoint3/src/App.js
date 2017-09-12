import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogCard from './doggies';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        doggies: [],
        //images: [],
    }
  }


  componentDidMount(){
         fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson);
               this.setState({doggies: [...this.state.doggies, responseJson.message]})
             })
            .catch((error) => {
              console.error(error);
            })
}
      renderDoggies() {
        console.log('in renderDoggies');
        console.log('dogs array', this.state.doggies);
        if(this.state.doggies){
        return this.state.doggies.map((str, index) => {
            return <DogCard key={index} name='' image={str} />
              // {<div key={key}>
              //   <a id='link' href={obj.url} target="_blank" >{obj.title}</a>
              // </div>}
            })
            }
        //console.log('images array', this.state.images)
      }
    render() {

        return (
          <div>

        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          <h2>All Dogs Go To Heaven</h2>
          </div>
        </div>
          
        <div className="App">
        {this.renderDoggies()}
        </div>
      </div>
    );
    }
}
export default App;
