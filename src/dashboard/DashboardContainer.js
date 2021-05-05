import { connect } from 'react-redux';
import { 
  getLaunches,
  getFilteredLaunches
} from './duck/operations';
import DashboardComponent from './DashboardComponent';

const mapStateToProps = (state) => {
  const {
    launches,
    filteredLaunches,
    isLoading
  } = state.dashoard;

  return {
    launches,
    filteredLaunches,
    isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLaunchData: _ => dispatch(getLaunches()),
    getFilteredData: searchKey => dispatch(getFilteredLaunches(searchKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
