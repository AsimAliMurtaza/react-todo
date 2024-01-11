import React from 'react';

const Footer = ({ itemCount }) => {
  return (
    <div className='footer-container'>
      {itemCount === 0 ? (
        'No todos'
      ) : (
        `${itemCount} ${itemCount === 1 ? 'todo' : 'todos'}`
      )}
      {' | \u00A9 Copyright '}
    </div>
  );
};

export default Footer;
