import { connect } from 'react-redux';
import dashboardOperations from './duck/operations';
import DashboardComponent from './DashboardComponent';

const mapStateToProps = (state) => {
  const {
    count,
    launches
  } = state.dashoard;

  return {
    count,
    launches
  }
}

const mapDispatchToProps = (dispatch) => {
  const {
    getLaunches
  } = dashboardOperations;
  // const getLaunchData = 

  return {
    getLaunchData: () => dispatch(getLaunches())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
