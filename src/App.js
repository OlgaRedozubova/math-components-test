import React, { Component } from 'react';
import MathpixText from 'math-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="preview">
          MathpixText: <MathpixText text={` ## Mathematics
When $(a \\ne 0)$, there are two solutions to \\\\(ax^2 + bx + c = 0\\\\) and they are
    $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$


\\\\[
\\frac{\\mathrm{d} z_{i}^{2}}{2}\\left[w_{+}^{(i)}(\\boldsymbol{z})+w_{-}^{(i)}(\\boldsymbol{z})\\right]
\\\\]`}/>
        </div>
      </div>
    );
  }
}

export default App;
