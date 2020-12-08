import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      test:null,
      pokedex:[]
    };

  }

  componentDidMount(){
    let url = "http://localhost:8000/"
    //let cors = {mode: 'no-cors'}
    fetch(url)
    .then(response=>{
      console.error(response)
      response.json().then(data=>{
        console.log(data)
        this.setState({pokedex:data})
      })
    })

  }

  render(){
    return(<p>{this.state.pokedex}</p>)
  }
}
export default App;
