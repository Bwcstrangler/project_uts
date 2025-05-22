import React from 'react';

const HomeBackgroundWrapper = ({ children }) => {
  const backgroundStyle = {
    position: 'relative',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/baskoro-building.jpg'})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    paddingTop: '60px',
    color: 'white',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 'calc(100vh - 70px)',
    textAlign: 'center',
    padding: '0 2rem 2rem 2rem',
    backgroundColor: 'rgba(0, 0, 0, 0)', // fallback color to check visibility
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle} />
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default HomeBackgroundWrapper;
