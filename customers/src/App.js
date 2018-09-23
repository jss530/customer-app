import React, { Component } from 'react';
import './App.css';
// import { postCustomers } from './actions/PostCustomers';
// import { connect } from 'react-redux';

const Papa = require('papaparse');

class App extends Component {


  parseFile(file) {
    var data;

    Papa.parse(file, {
     header: true,
     complete: this.activateJson
    })
  }

  activateJson(results) {

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
      // postCustomers(output);
      console.log(output);
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

// export default connect({ postCustomers })(App);
export default App;
