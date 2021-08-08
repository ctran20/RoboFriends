import React from 'react';

const AddRobot = ({ addChange, addBot, mode }) => {
  let theme = '';
  let name = '';

  if (mode === 'set_set2/') {
    theme = 'pa3 ba b--blue bg-yellow grow';
    name = 'Add Alien';
  } else {
    theme = 'pa3 ba b--blue bg-light-green grow';
    name = 'Add Robot';
  }
  return (
    <div className="ma1">
      <input
        style={{ width: 200 }}
        type="text"
        className="pa3 ba b--blue bg-lightest-blue"
        placeholder="Name"
        onChange={addChange}
        maxLength="20"
      />
      <button
        style={{ width: 150 }}
        className={theme}
        type="submit"
        onClick={addBot}
      >
        {name}
      </button>
    </div>
  );
};

export default AddRobot;
