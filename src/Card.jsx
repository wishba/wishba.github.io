import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <a
        className='card__link'
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className='card__image'
          src={props.image}
          alt={props.image}
        />
        <p className='card__title'>{props.title}</p>
      </a>
    </div>
  )
}

export default Card