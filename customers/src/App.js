import React, { Component } from 'react';
import './App.css';

const Papa = require('papaparse');

class App extends Component {

  // activateJson(results) {
  //
  //   let output = results.map(record => {
  //
  //   let arr = record.split(',')
  //   debugger;
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

  parseFile(file) {
    var data;

    Papa.parse(file, {
     header: true,
     complete: function(results, file) {
	      console.log("Parsing complete:", results, file);

        let output = results.data.map(record => {

        return {
          "name": record.name,
          "emails": [
              {
                "email": record.email
              }
            ],
          "phones": [
              {
                "type": "home",
                "phone": record.homePhone
              },
              {
                "type": "work",
                "phone": record.workPhone
              }
            ],
           "tags": record.customerType,
           "birthdayAt": record.birthday
          };

        });
        return output;
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Kustomer Guest Import Page!</h1>
        </header>

        <input type="file" id="csv-file" accept='.csv'
        onChange={e => this.parseFile(e.target.files[0])}/>

      </div>
    );
  };
}

export default App;
