import React from 'react';

const ProgressBar = props => {
  const { bgcolor = 'green', progress } = props;

  const containerStyles = {
    height: 28,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: '20px 0',
  };

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
