 import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { throwStatement } from '@babel/types';


/*function City(props) {
  return (<div></div>);

          <div>
          <City />
          <City />
        </div>
}

function ZipSearchField(props) {
  return (
    <div>
      <center><h1>ZipCode</h1> </center>
      {zipCodeUrl.map((zipcode) => (
        <div> 
          <div> 
            <h5>{zipcode.State} </h5>
            <h6>{zipcode.LocationText} </h6>
            <p>{zipcode.Location} </p>
          </div>
        </div>
      ))}
    </div>
  )
}*/

const ZipSearchField = ({zipCodeUrl}) => {
  return (
    <div>
      {zipCodeUrl.map((zipcode) => (
        <div className="container"> 
          <div className="output"> 
            <header className="output-header">{zipcode.LocationText} </header>
            <div className="unordered-items">
              <ul>
                <li>State: {zipcode.State}</li>
                <li>Location: ({zipcode.Lat},{zipcode.Long})</li>
                <li>Population(Estimated): {zipcode.EstimatedPopulation}</li>
                <li>Total Wages: {zipcode.TotalWages}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

class App extends Component {

  state = {
    zipcodeValue: '',
    zipCodeUrl:[]
  };


  onChangeHandler = (event) => {
      this.setState({
        zipcodeValue: event.target.value
      });
  }

  onKeyPresshandler = () => {
    const url = `http://ctp-zip-api.herokuapp.com/zip/${this.state.zipcodeValue}`
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({zipcodeValue: '', zipCodeUrl: data})
    })
    .catch(console.log)
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <div className="container-zipcode">
          <div className="inlineZipCode">
            <h5>Zip Code: </h5>
            <input value = {this.state.zipcodeValue} onChange={this.onChangeHandler} onKeyPress={this.onKeyPresshandler}/>
          </div>
        </div>

          <ZipSearchField zipCodeUrl = {this.state.zipCodeUrl} />
      </div>
    );
  }
}

export default App;
