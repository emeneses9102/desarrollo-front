import React from 'react'
import './itemAlert.css'
const ItemAlert = ({titulo,subtitulo, img, url,target}) => {
  return (
    <div className='container-item-alert'>
        <span className="title-item">{titulo}</span>
        {subtitulo && <span className="subTitle-item">{subtitulo}</span>}
        <img src={img} alt="img-NOAA"  className='img-item-alert'/>
        <a href={url} target={target} className='btn-item-alert'>Ver mapa</a>
    </div>
  )
}

export default ItemAlert