import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <img
        className='card__image'
        src={props.image}
        alt={props.image}
      />
      <br />
      <a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a>
    </div>
  )
}

export default Card