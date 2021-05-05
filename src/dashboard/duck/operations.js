import {
  fetchLaunchData
} from './reduxSlice';

const getLaunches = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/launches')
    .then(response => response.json())
    .then(data => dispatch(fetchLaunchData(data)))
    .catch(error => {
      console.error(error);
    });
};


export default {
  getLaunches
}
