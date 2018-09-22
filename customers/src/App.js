import React, { Component } from 'react';
import './App.css';
import { Data } from './datasets/Data-2.csv'

const Papa = require("papaparse/papaparse.min.js");


class App extends Component {

  parseFile = () => {
    const dataFile = Data

    Papa.parse(dataFile, {
     header: true,
     complete: function(results, file) {
	      console.log("Parsing complete:", results, file);
      }
    });
  }

  // activateJson = () => {
  //
  //   let records = csv.split(',');
  //
  //   let output = records.map(record => {
  //
  //   let arr = record.split(',')
  //
  //   return {
  //     "name": arr[0],
  //     "emails": [
  //         {
  //           "email": arr[1]
  //         }
  //       ],
  //     "phones": [
  //         {
  //           "type": "home",
  //           "phone": arr[2]
  //         },
  //         {
  //           "type": "work",
  //           "phone": arr[3]
  //         }
  //       ],
  //      "tags": arr[4],
  //      "birthdayAt": arr[5]
  //     };
  //   });
  //   console.log(output);
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Kustomer Guest Import Page!</h1>
        </header>

        <button onClick={this.parseFile}>
          Show J S O N
        </button>
      </div>
    );
  };
}

export default App;
