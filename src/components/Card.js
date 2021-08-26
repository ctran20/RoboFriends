import React from 'react';

const Card = (props) => {
  const { name, email, mode } = props;
  let theme = '';
  if (mode === 'set_set2/') {
    theme = 'bg-yellow dib br3 pa3 ma2 grow';
  } else {
    theme = 'bg-light-green dib br3 pa3 ma2 grow';
  }
  return (
    <div className={theme}>
      <img
        alt="robots_img"
        // prettier-ignore
        src={`https://robohash.org/${mode}${name.replace(/\s/g, '')}?size=250x250`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default React.memo(Card);
