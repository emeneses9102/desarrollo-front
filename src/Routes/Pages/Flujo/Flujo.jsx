import React from 'react'
import './Flujo.css'
const Flujo = () => {
  return (
    <div className='flujo-container '>
        <div className="flujo pais-asistido">
          <h2>Flujograma País asistido</h2>
          <span>Para el pais asistido, quien solicita y recibe Asistencia Humanitaria Internacional</span>
          <div className="flujo-detalle">
            <div className="detalle">
              <img src="assets/icons/icon-pais.svg" alt="pais" />
              <span>País Asistido</span>
              <p>Recolección de Información</p>
            </div>
            <div className='conector'>
              <img src="assets/icons/arrow.svg" alt="arrow" />
            </div>
            <div className="detalle">
              <img src="assets/icons/icon-alert.svg" alt="alert" />
              <span>Información de Alerta</span>
              <p>Declaración de Alerta e información de impactos y necesidade</p>
            </div>
            <div className='conector'>
              <img src="assets/icons/arrow.svg" alt="arrow" />
            </div>
            <div className="detalle">
              <img src="assets/icons/icon-hour.svg" alt="hour" />
              <span>Apoyo a Recuperación</span>
              <p>Gestión de AHI</p>
            </div>
          </div>
        </div>
        <div className="flujo pais-asistente">
          <h2>Flujograma de asistente</h2>
          <span>Para el pais asistente, quien solicita y recibe Asistencia Humanitaria Internacional</span>
          <div className="flujo-detalle">
            <div className="detalle">
              <img src="assets/icons/icon-pais.svg" alt="pais" />
              <span>País Asistido</span>
              <p>
                Recolección de Información <br />
                Regional de potencial incidente
              </p>
            </div>
            <div className='conector'>
              <img src="assets/icons/arrow.svg" alt="arrow" />
            </div>
            <div className="detalle" >
              <img src="assets/icons/health.svg" alt="alert" />
              <span>Información de Alerta</span>
              <p className='m-0'>
                Ofecimientos <br />
                Preparativos <br />
                Envío
                </p>
             
            </div>
            <div className='conector'>
              <img src="assets/icons/arrow.svg" alt="arrow" />
            </div>
            <div className="detalle">
              <img src="assets/icons/icon-hour.svg" alt="hour" />
              <span>Envío y Recepción</span>
              <p>Apoyo a recuperación</p>
            </div>
          </div>
        </div>
        <div className="flujo pais-transito">
          <h2>Flujograma País de Tránsito</h2>
          <span>Para el pais asistido, quien solicita y recibe Asistencia Humanitaria Internacional</span>
          <div className="flujo-detalle">
            <div className="detalle">
              <img src="assets/icons/health.svg" alt="salud" />
              <span>País de Tránsito</span>
              <p>Recepción de solicitud de apoyo en tránsito AH</p>
            </div>
            <div className='conector'>
              <img src="assets/icons/arrow.svg" alt="arrow" />
            </div>
            <div className="detalle">
              <img src="assets/icons/icon-hour.svg" alt="hour" />
              <span>Proceso de Recepción y Envío</span>
              <p>Gestión Aduanal de Tránsito</p>
            </div>
            
            
          </div>
        </div>
    </div>
  )
}

export default Flujo