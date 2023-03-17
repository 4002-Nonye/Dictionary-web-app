import React from 'react'

const Error = ({msg}) => {
  return (
    <p className='text-danger text-sm font-bold pt-3'>{msg}</p>
  )
}

export default Error