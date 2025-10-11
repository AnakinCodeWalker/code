import React from 'react'

const Card = ({children}) => {
  return (
    <div 
    style={{
        border: '2px solid #ccc',
        borderRadius : '5px'
        }}>

        card
        {children}

        </div>
  )
}

export default Card