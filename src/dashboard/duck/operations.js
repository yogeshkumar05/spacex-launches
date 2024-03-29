import {
  fetchLaunchData,
  filterLaunchData
} from './reduxSlice';

export const getLaunches = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/launches')
    .then(response => response.json())
    .then(data => dispatch(fetchLaunchData(data)))
    .catch(error => {
      console.error(error);
    });
};

export const getFilteredLaunches = (searchKey) => (dispatch, getState) => {
  const {
    dashoard: {
      launches
    }
  } = getState();

  dispatch(filterLaunchData({ data: launches, key: searchKey }));
}

