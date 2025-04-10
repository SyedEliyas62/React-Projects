import React, { useEffect, useState } from 'react'
import Title from './Title'
import Count from './Count'
import ResetButton from './ResetButton'

import ButtonContainer from './ButtonContainer'

const Card = () => {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if(event.code === 'Space'){
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.addEventListener('keydown', handleKeydown);
    }
  },[count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
    <Title locked={locked} />
    <Count count={count}/>
    <ResetButton setCount={setCount} />
    <ButtonContainer setCount={setCount} locked={locked} />
  </div>
  )
}

export default Card