import React from 'react';

const Header = ({ width, theme, title }) => {
  return (
    <h1
      style={width <= 760 ? { fontSize: '3rem' } : { fontSize: '5rem' }}
      className={theme}
    >
      {title}
    </h1>
  );
};

export default React.memo(Header);
