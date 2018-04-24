import React, { Component } from 'react';
import MainLayOut from '../../component/MainLayOut/MainLayOut';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="footer">
        <MainLayOut {...this.props} />
      </div>
    );
  }
}

export default App;
