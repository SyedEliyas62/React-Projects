import { ResetIcon } from '@radix-ui/react-icons'
import React from 'react'

const ResetButton = ({setCount}) => {
  const handleClick = () =>{
    setCount(0);
  }
  return (
    <button onClick={handleClick} className='reset-btn'>
      <ResetIcon className='reset-btn-icon'/>
    </button>
  )
}

export default ResetButton