import React, { Component } from 'react';
import MathpixText from 'math-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          MathpixText: <MathpixText text="This is NEW TEXT"/>
        </div>
      </div>
    );
  }
}

export default App;
