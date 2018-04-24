import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../containers/App/App';
import memberInfo from '../containers/memberInfo/memberInfo';
import infoList from '../containers/infoList/infoList';

class list extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={App} />
          <Route path="/member" component={memberInfo} />
          <Route path="/infoList" component={infoList} />
        </div>
      </Router>
    );
  }
}
export default list;
