import React from 'react';
import '../Containers/Card.css'

const Card = ({id, name, email}) => {
    return (
      <div className='tc dib bg-light-green br3 ma2 grow bw2 shadow-5'>
          <h1>{id}</h1>
          <img src={`https://robohash.org/${id}}?size=200x200`} alt=''/>
          <div>
              <h2>{name}</h2>
              <p>{email}</p>
          </div>
      </div>  
    );
}

export default Card;