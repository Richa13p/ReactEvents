import React from 'react'
import Button from './button'
const Toolbar = ({onplayMovie,onUpdateImage}) => {
  return (
    <div>
      <Button onClick = {onplayMovie}>
        playing movie
      </Button>
      <Button onClick = {onUpdateImage}>
       update image</Button>
    </div>
  )
}

export default Toolbar