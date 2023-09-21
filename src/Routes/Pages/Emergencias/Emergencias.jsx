import React from 'react'
import './Emergencias.css'
const Emergencias = () => {
  return (
    <div className='emergencias-container'>
        <div className="container">
            <span className='titulo-emergencias'>Flujo de Emergencias</span>
            <>
                <a href='#'>Código 012 - Terremoto Guatemala - 02-03-2023</a>
                <div className="flujo-emergencias">
                    <span className='item-flujo'>Información</span>
                    <img src="assets/icons/arrow.svg" alt="arrow" />
                    <span className='item-flujo'>Llamamiento</span>
                    <img src="assets/icons/arrow.svg" alt="arrow" />
                    <span className='item-flujo'>Ofrecimiento</span>
                    <img src="assets/icons/arrow.svg" alt="arrow" />
                    <span className='item-flujo green'>Tránsito</span>
                </div>
                <div className="detalle-emergencia">
                    <div className="detalle-item">
                        <span>Información</span>
                        <span>12-03-23: Activa.</span>
                        <span>10-03-23: Se encuentra en tránsito el ofrecimiento 025215.</span>
                        <span>05-03-23: Activado el llamamieno AHI por part de Guatemala.</span>
                        <span>03-03-23: Información del terremoto actualizada.</span>
                    </div>
                    <div className='detalle-item'>
                        <button>Detalle</button>
                    </div>
                </div>
            </>
            <hr className='divisor'/>
            <>
                
                <a href='#'>Código 012 - Terremoto Guatemala - 02-03-2023</a>
                <div className="flujo-emergencias">
                    <span className='item-flujo'>Información</span>
                    <img src="assets/icons/arrow.svg" alt="arrow" />
                    <div className='group-item'>
                        <span className='item-flujo'>Llamamiento</span>
                        <img src="assets/icons/arrow.svg" alt="arrow" />
                        <span className='item-flujo red'>No requerido</span>
                    </div>
                    <img src="assets/icons/arrow.svg" alt="arrow" />
                    <span className='item-flujo'>Ofrecimiento</span>
                    <img src="assets/icons/arrow.svg" alt="arrow" />
                    <span className='item-flujo green'>Tránsito</span>
                </div>
                <div className="detalle-emergencia">
                    <div className="detalle-item">
                        <span>Información</span>
                        <span>12-03-23: Activa.</span>
                        <span>10-03-23: Se encuentra en tránsito el ofrecimiento 025215.</span>
                        <span>05-03-23: Activado el llamamieno AHI por part de Guatemala.</span>
                        <span>03-03-23: Información del terremoto actualizada.</span>
                    </div>
                    <div className='detalle-item'>
                        <button>Detalle</button>
                    </div>
                </div>
            </>
        </div>
    </div>
  )
}

export default Emergencias