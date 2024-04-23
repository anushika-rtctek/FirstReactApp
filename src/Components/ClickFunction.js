import React from 'react'

function ClickFunction() {
    function handleClick(){
        console.log("Button Clicked")
    }
  return (
    <div>
      <button onClick={handleClick}>Click Me Function</button>
    </div>
  )
}

export default ClickFunction
