import React, {} from "react";

function Keypad() {

  function enteringPass(){
    console.log("Entering password...")
  }

  return (
    <div>
      <input type='password' onChange={enteringPass}/>
    </div>
  )
}

export default Keypad