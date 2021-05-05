
import React, { Component } from 'react';
import DashboardTile from './DashboardTile';
import SearchBar from '../components/HeaderSearch';
import DisplayCount from '../components/DisplayCount';
import Loader from '../components/Loader';
import PropTypes from 'prop-types';
export default class DashboardComponent extends Component {

  componentDidMount() {
    this.props.getLaunchData();
  }

  handleSearchChange = (e) => {
    this.props.getFilteredData(e.target.value);
  }

  render() {
    const {
      filteredLaunches,
      launches,
      isLoading
    } = this.props;

    return (
      <div className='App'>
        <SearchBar onSearchChanged={this.handleSearchChange} />
        <div className='app-container'>
        {
          isLoading ? <Loader /> :
            <>
              <DisplayCount total={launches.length} filtered={filteredLaunches.length} />
              {
                filteredLaunches.map(launch => <DashboardTile launchData={launch} key={launch.mission_name}/>)
              }
            </>
        }
        </div>
      </div>
    );
  }
}

DashboardComponent.propTypes = {
  filteredLaunches: PropTypes.array,
  launches: PropTypes.array,
  isLoading: PropTypes.bool,
  getLaunchData: PropTypes.func,
  getFilteredData: PropTypes.func
};
DashboardComponent.defaultProps = {
  filteredLaunches: [],
  launches: [],
  isLoading: true,
  getLaunchData: () => {},
  getFilteredData: () => {},
}

