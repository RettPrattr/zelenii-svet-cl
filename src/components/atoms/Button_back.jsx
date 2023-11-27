import React from 'react'

const Button = ({ text, width }) => {

  const styleButton = {
    width: width
}

  return (
    <div style={styleButton} className='button'>
      <a href="" className='font-1-bold'>{text}</a>
    </div>
  )
}

export default Button
