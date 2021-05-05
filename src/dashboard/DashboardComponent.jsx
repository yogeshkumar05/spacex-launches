
import React, { Component } from 'react';

export default class DashboardComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getLaunchData();
  }
  render() {
    const {
      launches
    } = this.props;
    console.log('launches', launches)
    return (
      <div className='App'>
        <h1>SpaceX Launches</h1>
      </div>
    );
  }
}



// export default App;
