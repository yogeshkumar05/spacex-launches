import React from 'react';

const DisplayCount = (props) => {
  const {
    total,
    filtered
  } = props;

  return (<div className='display-count'>Showing {filtered} of {total} entries</div>)
}

export default DisplayCount;