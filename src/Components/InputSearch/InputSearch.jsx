import React from 'react'
import './InputSearch.css'

const InputSearch = () => {
  return (
    <div>
      <div className="container-input-search">
          <input type="search" placeholder='Seleccionar País' style={{border: '2px solid #3d9be9', borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px'}}/>
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </div> 
    </div>
  )
}

export default InputSearch