import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return <Card
            key={i}
            name={robots[i].name}
            email={robots[i].email} />
    });

    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;