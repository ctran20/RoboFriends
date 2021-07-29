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
        <div>
            <input
                type='form'
                style={{ marginBottom: 20 }}
                className='pa3 ba b--blue bg-lightest-blue'
                placeholder='Name'
                onChange={addChange}
                maxLength="20"
            />
            <button
                className={theme}
                type='submit'
                onClick={addBot}
            >{name}</button>
        </div>
    );
}

export default AddRobot;