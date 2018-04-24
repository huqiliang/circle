import React, { Component } from 'react';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class App extends Component {
  render() {
    return (
      <div>
        <List renderHeader={() => '基本样式'} className="my-list">
          <Item extra={'内容内容'}>标题文字</Item>
        </List>
        <List renderHeader={() => '带副标题'} className="my-list">
          <Item arrow="horizontal" multipleLine>
            标题文字 <Brief>副标题</Brief>
          </Item>
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
          >
            标题文字 <Brief>副标题</Brief>
          </Item>
        </List>
      </div>
    );
  }
}

export default App;
