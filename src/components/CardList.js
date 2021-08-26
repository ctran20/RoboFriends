import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const { robots, mode } = props;
  const cardComponent = robots.map((user, i) => {
    return (
      <Card key={i} name={robots[i].name} email={robots[i].email} mode={mode} />
    );
  });

  return <div>{cardComponent}</div>;
};

export default React.memo(CardList);
