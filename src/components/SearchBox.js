import React from 'react';

const SearchBox = ({ searchChange, modeChange, mode }) => {
  let theme = '';
  let name = '';
  if (mode === 'set_set2/') {
    theme = 'pa3 ba b--blue bg-yellow grow';
    name = 'Search Aliens';
  } else {
    theme = 'pa3 ba b--blue bg-light-green grow';
    name = 'Search Robots';
  }
  return (
    <div className="ma1">
      <input
        aria-label="Search Robot"
        style={{ width: 200 }}
        type="text"
        className={'pa3 ba b--blue bg-lightest-blue'}
        placeholder={name}
        onChange={searchChange}
        maxLength="20"
      />
      <button
        style={{ width: 150 }}
        className={theme}
        type="submit"
        onClick={modeChange}
      >
        Switch Mode
      </button>
    </div>
  );
};

export default React.memo(SearchBox);
