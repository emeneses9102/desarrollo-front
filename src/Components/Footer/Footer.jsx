import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="container">
          <div className="datos row m-0">
            <div className="seccion_datos col-md-3 col-sm-6">
              <h4>Ubicaciones</h4>
              <span>Guatemala</span>
              <span>El Salvador</span>
              <span>Honduras</span>
              <span>Nicaragua</span>
              <span>Costa Rica</span>
              <span>Panamá</span>
              <span>República Dominicana</span>
            </div>
            <div className="seccion_datos col-md-3 col-sm-6">
              <h4>Documentos</h4>
              <span>Inicio</span>
              <span>Alertas</span>
              <span>Manejo de Emergencias</span>
              <span>Flujograma Mec-Reg</span>
              <span>Visor</span>
              <span>Noticias</span>
              <span>Acerca de Cepredenac</span>
            </div>
            <div className="seccion_datos col-md-3 col-sm-6">
              <h4>Atención al cliente</h4>
              <span>Contáctanos</span>
              <span>Asistencia</span>
              <span>Acerva de</span>
              <span>Rescatistas</span>
            </div>
            <div className="seccion_datos col-md-3 col-sm-6">
              <h4>Información</h4>
              <span>Nacionales</span>
              <span>Regionales</span>
              <span>Institucionales</span>
              <span>Memoria de Labores</span>
            </div>
          </div>
          <div className="redes">
            <span><a href="https://www.facebook.com/CEPREDENAC/" target='_blank'><i className="fa-brands fa-facebook-f"></i></a></span>
            <span><a href="https://www.instagram.com/cepredenac" target='_blank'><i className="fa-brands fa-instagram"></i></a></span>
            <span><a href="https://twitter.com/CEPREDENAC" target='_blank'><i className="fa-brands fa-twitter"></i></a></span>
            <span><a href="https://www.youtube.com/channel/UCF2sddydog_b59tfc5Liu_w" target='_blank'><i className="fa-brands fa-youtube"></i></a></span>
          </div>
          <div className="miembros">
            <span>Miembros de Cepredenac</span>
            <hr />
            <div className="row m-0 container-logos">
              <img className='col-md-3 col-sm-6 p-2' src="assets/img/logo_conred.png" alt="CONRED" />
              <img className='col-md-3 col-sm-6 p-2' src="assets/img/logo_copeco.png" alt="COPECO" />
              <img className='col-md-3 col-sm-6 p-2' src="assets/img/logo_dgpc.png" alt="DGPC" />
              <img className='col-md-3 col-sm-6 p-2' src="assets/img/logo_sinaproc.png" alt="SINAPROC" />
            </div>
          </div>
        </div>
      </div>
      <div className="author">
        <div className="container">
          <span>© 2023 Creado por AO</span>
        </div>
      </div>
    </>
  )
}

export default Footer