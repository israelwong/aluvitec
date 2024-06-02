import React from 'react'

function Whatsapp({props}) {
    const msg = props.msg

    function mensaje(){
        alert(msg)
    }
    
  return (
    <div>
        <button className='text-2xl text-red-900' onClick={()=>mensaje()}>
            Click para contactar
        </button>      
    </div>
  )
}

export default Whatsapp
