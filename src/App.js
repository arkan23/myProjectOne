import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      isModalVisible: false,
    };
  
  }

  shouldComponentUpdate(props, state) {
    if (props == 'Заголовок') {
        return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Modal
          isVisible={this.state.isModalVisible}
          onTap={() => {
            this.setState({isModalVisible: !this.state.isModalVisible})
          }}/>
      </div>
    );
  }
}

export default App;


function Modal(props) {
  
  return (
    <div className={'Modal'}>

    </div>
  )
}