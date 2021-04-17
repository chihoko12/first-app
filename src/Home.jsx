import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  inputChange(p1, p2, e) {
    console.log('Params1: ', p1);
    console.log('Parmas2: ', p2);
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>
          Welcome to the Home Page!
        </h1>

        <div className="container">
          <p>Biding method with parameters</p>
          <input onChange={(e) => this.inputChange('Parameter 1', 'Parameter 2', e)}></input><br />
          <p>Input value: {this.state.input}</p>
        </div>
      </div>
    );
  }
}

export default Home;
