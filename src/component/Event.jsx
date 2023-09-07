import React from 'react'
import Toolbar from './Toolbar'
const Event = () => {
  return (
    <div>
    <Toolbar
   onplayMovie={() => alert('playin')}
   onUpdateImage={() =>  alert('image')}

    />

  <button onClick={()=>alert ('hiiii')}>hii</button>
    </div>
  )
}

export default Event