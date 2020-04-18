import React from 'react';

const PreviewStoriesCard = (props) => {
  return (
    <div>
      <img style={{width: '50px', height: '50px'}} src={props.photoUrl} />
      <p>{props.date}</p>
    </div>
  );
};

export default PreviewStoriesCard;