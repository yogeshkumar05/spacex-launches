export const filterLaunches = ({ data, key }) => data.filter((entry) => entry.rocket.rocket_name.toLowerCase().indexOf(key.toLowerCase()) > -1);