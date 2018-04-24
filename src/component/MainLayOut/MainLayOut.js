import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import './MainLayOut.less';

class MainLayOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }
  render() {
    const pathname = this.props.location.pathname;
    return (
      <div className="footer">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="消息"
            key="消息"
            icon={
              <div
                style={{
                  width: '1.44rem',
                  height: '1.44rem',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  1.42rem 1.42rem no-repeat',
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '1.44rem',
                  height: '1.44rem',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  1.42rem 1.42rem no-repeat',
                }}
              />
            }
            selected={pathname === '/info'}
            badge={1}
            onPress={() => {
              this.props.history.push('/info');
            }}
            data-seed="logId"
          />
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '1.44rem',
                  height: '1.44rem',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  1.42rem 1.42rem no-repeat',
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '1.44rem',
                  height: '1.44rem',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  1.42rem 1.42rem no-repeat',
                }}
              />
            }
            title="动态"
            key="动态"
            badge={'new'}
            selected={pathname === '/dynamic'}
            onPress={() => {
              this.props.history.push('/dynamic');
            }}
            data-seed="logId1"
          />
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '1.44rem',
                  height: '1.44rem',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  1.42rem 1.42rem no-repeat',
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '1.44rem',
                  height: '1.44rem',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  1.42rem 1.42rem no-repeat',
                }}
              />
            }
            title="圈子"
            key="圈子"
            dot
            selected={pathname === '/circle'}
            onPress={() => {
              this.props.history.push('/circle');
            }}
          />
          <TabBar.Item
            icon={{
              uri:
                'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
            }}
            selectedIcon={{
              uri:
                'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
            }}
            title="我"
            key="我"
            selected={pathname === '/member'}
            onPress={() => {
              this.props.history.push('/member');
            }}
          />
        </TabBar>
      </div>
    );
  }
}

export default MainLayOut;
