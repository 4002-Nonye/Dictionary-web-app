import React from 'react'

const Error = ({msg,className}) => {
  return (
   <>
   
      <p className={className}>
        {msg}
      </p>
      </>
   
  )
}

export default Error