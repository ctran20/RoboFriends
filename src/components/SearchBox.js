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
        <div>
            <input
                style={{ marginBottom: 20 }}
                className={'pa3 ba b--green bg-lightest-blue'}
                type='search'
                placeholder={name}
                onChange={searchChange}
            />
            <button
                className={theme}
                type='submit'
                onClick={modeChange}
            >Switch Mode</button>
        </div>
    );
}

export default SearchBox;