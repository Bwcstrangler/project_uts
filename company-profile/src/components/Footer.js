import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: 'transparent',
    color: '#ffffff',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      © 2014 MyCompany. All rights reserved.
    </footer>
  );
}

export default Footer;
