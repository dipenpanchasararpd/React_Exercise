import React from 'react'

function Confidential() {
  
  function checklog(){
    if(localStorage.getItem("flag")=="false"){
      return <div>Id = 258488542</div>
    }
    else{
      return <div>Confidential Information</div>
      
    }
    
  }
  return (
    
    <div>
      {checklog()}
    </div>
  )
}

export default Confidential
