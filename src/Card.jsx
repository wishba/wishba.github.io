import React from 'react'

function Card(props) {
  const card = {
    textAlign: 'center',
    width: '25vw',
    maxWidth: '10rem'
  }
  const cardImg = {
    width: '100%'
  }
  return (
    <div style={card}>
      <img
        style={cardImg}
        src={props.image}
        alt={props.image}
      />
      <br />
      <a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a>
    </div>
  )
}

export default Card