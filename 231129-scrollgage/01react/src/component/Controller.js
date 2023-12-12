import React from 'react'

const Controller = ({handleSetCount}) => {
  //handleSetCount는 다이렉트로 진행되는 것이 아니라 콜백함수로서 작동해야한다.
  return (
    <div>
      <button onClick={()=>handleSetCount(-1)}>-1</button>
      <button onClick={()=>handleSetCount(-10)}>-10</button>
      <button onClick={()=>handleSetCount(-100)}>-100</button>
      <button onClick={()=>handleSetCount(+100)}>+100</button>
      <button onClick={()=>handleSetCount(+10)}>+10</button>
      <button onClick={()=>handleSetCount(+1)}>+1</button>
    </div>
  )
}

export default Controller
