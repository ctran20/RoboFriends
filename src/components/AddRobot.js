import React from 'react';

const AddRobot = ({ addChange, addBot }) => {
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
                className='pa3 ba b--blue bg-light-green grow'
                type='submit'
                onClick={addBot}
            >Add Robot</button>
        </div>
    );
}

export default AddRobot;