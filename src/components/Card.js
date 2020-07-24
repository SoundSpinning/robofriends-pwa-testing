import React from 'react';
// import { shallow, mount, render } from 'enzyme';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-green dib br3 pa2 ma2 grow shadow-5 card'>
      <img alt='robots' src={`https://robohash.org/${id}?size=150x150`} />
      <div>
        <h2 className='f4'>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;