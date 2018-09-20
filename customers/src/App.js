import React, { Component } from 'react';
import './App.css';

class App extends Component {

  const ImportFromFile = () => {
    let fileReader;

    const handleFileRead = (e) => {
      const content = fileReader.result;
      //finish content action here
    };

    const handleFileChosen = (file) => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Kustomer Guest Import Page!</h1>
        </header>

        <p className="App-intro">
        </p>

        <div className="upload">
          <input type='file' id='file' className='input-file' accept='.csv'
          onChange={e => handleFileChosen(e.target.files[0])} />
        </div>
      </div>
    );
  }
}

export default App;
