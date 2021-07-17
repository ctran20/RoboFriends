import React from 'react';

const Card = (props) => {
    const { name, email } = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img alt='robots_img' src={`https://robohash.org/${name.replace(/\s/g, "")}?200_200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;