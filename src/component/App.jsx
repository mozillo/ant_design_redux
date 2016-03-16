import React, { Component } from 'react';
import { QueueAnim, Button } from 'antd';
import './App.less';
import { connect } from 'react-redux';
import { initial } from '../redux/modules/counter';

class App extends Component {
  constructor(props) {
      super(props);
  }
  onClick() {
      this.props.initial();
  }
  render() {
    return (
      <div style={{ backgroundColor: "#FFFFFF", margin: 10, padding: 10, borderRadius: 5 }}>
        
        <div>
            <Button type="primary" onClick={this.onClick.bind(this)}>Trigger Action</Button>
        </div>
        
        <div style={{ fontSize: 22 }}>{this.props.counter}</div>
      </div>
    );
  }
}

export default connect(
    state => ({ counter: state.counter }),
    dispatch=>({
        initial: () => dispatch(initial())
    })
)(App);

