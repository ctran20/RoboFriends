import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <input
            style={{ marginBottom: 20 }}
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='Search Robots'
            onChange={searchChange}
        />
    );
}

export default SearchBox;