import React from 'react'

const Error = ({msg}) => {
  return (
    <p className='text-danger text-sm font-bold animate-shake'>{msg}</p>
  )
}

export default Error