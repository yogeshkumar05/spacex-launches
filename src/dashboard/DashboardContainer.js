import { connect } from 'react-redux';
import { getLaunches } from './duck/operations';
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
  return {
    getLaunchData: () => dispatch(getLaunches())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
