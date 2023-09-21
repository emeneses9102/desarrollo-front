import React from 'react'
import './Inicio.css'
const Inicio = () => {
  return (
    <div className='inicio'>
      <div className="container-fluid contenedor-global">
        <div className="section-icons row m-0">
          <span className='col-md-3 col-sm-6'><img src="assets/icons/alert.svg" alt="alert" />Alertas</span>
          <span className='col-md-3 col-sm-6'><img src="assets/icons/mecanismo.svg" alt="mecanismo" />Mecanismo Regional</span>
          <span className='col-md-3 col-sm-6'><img src="assets/icons/arcGis.svg" alt="arcGis" />Sistema ArcGis</span>
          <span className='col-md-3 col-sm-6'><img src="assets/icons/documentos.svg" alt="documentos" />Documentos</span>
        </div>
        <div className="flujo">
          <h2>Flujograma de asistencia</h2>
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
        <div className="mapa container">
          <h2>Visor mapa Arcgis</h2>
          <img src="assets/img/mapa.png" alt="" />
          <div className="cards row">
            <div className="card col-md-4">
              <span className='icon'><i className="fa-regular fa-bell"></i></span>
              <span className='titulo-card'>Llamamiento</span>
              <span className='total'>3</span>
              <span className='texto'>Procesos activos de solicitud AHI</span>
            </div>
            <div className="card col-md-4">
              <span className='icon'><i className="fa-solid fa-truck"></i></span>
              <span className='titulo-card'>Trnásitos</span>
              <span className='total'>17</span>
              <span className='texto'>Envíos y recibimientos</span>
            </div>
            <div className="card col-md-4">
              <span className='icon'><i className="fa-solid fa-check"></i></span>
              <span className='titulo-card'>Ofrecimientos</span>
              <span className='total'>20</span>
              <span className='texto'>AHI</span>
            </div>
          </div>
        </div>
        <div className="noticias">
          <h2>Noticias</h2>
          <div className="contenedor-noticias ">
            <div className=" m-2 row m-0">
              <div className="section-noticia col-md-7">
                <section>
                  <span className='icono icono-pen'><i className="fa-solid fa-pen"></i></span>
                  <div>
                    <span className='noticia-title'>Hoy comienza la temporada ciclónica del Atlántico del 2023</span>
                    <span>"Edit Text" or double click here to change the text and make it your own. You can also adjust the paragraph's font, size and color so it fits your website’s theme.​</span>
                  </div>
                </section>
                <section>
                  <span className='icono icono-mail'><i className="fa-regular fa-envelope"></i></span>
                  <div>
                    <span className='noticia-title'>Claudia Herrera forma parte de la Reunión de Alto Nivel para la Revisión de Mitad de Período del Marco de Sendai </span>
                    <span>This is a great place to tell users a story about your website and let them know more about what you offer. You may want to share information about your company's background, your team, or the services you provide.​</span>
                  </div>
                </section>
              </div>
              <div className="section-img col-md-5 p-0">
                <img src="assets/img/new.png" alt="noticia" />
              </div>
            </div>
            <div className="container">
              <div className="section-noticia" style={{padding:'0px'}}>
                <section >
                  <span className='icono icono-user'><i className="fa-regular fa-user"></i></span>
                 <div>
                 <span className='noticia-title'>Gobierno de la República de China (Taiwán) realizó la ejecución del Cuarto Desembolso del Proyecto de Consolidación de las Capacidades Institucionales del SICA</span>
                  <span>This is a great place to tell users a story about your website and let them know more about what you offer. You may want to share information about your company's background, your team, or the services you provide.​</span>
                 </div>
                </section>
                <section className='column'>
                  <span className='icono icono-pen'><i className="fa-solid fa-pen"></i></span>
                  <div>
                    <span className='noticia-title'>Taller sobre el procedimiento regional de facilitación de tránsito terrestre para envíos de socorro</span>
                    <span>This is a great place to tell users a story about your website and let them know more about what you offer. You may want to share information about your company's background, your team, or the services you provide.​</span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="eventos">
          <div className="container evento-global">
            <div className="container-eventos">
              <span className='titulo-eventos'>Últimos eventos</span>
              <span className='subtitulo-eventos'>III Simulacro Regional</span>
              <p>
              Es el resultado de una articulación de esfuerzos para la preparación de grupos nacionales especializados y población ante el riesgo de desastres por eventos amenazantes de los países de Centro América y Republica Dominicana miembros del CEPREDENAC-SICA. Este espacio permitirá reunir a más de 10,000 Actores Sociales del orden global, regional y nacional para la asistencia humanitaria y recuperación ante desastres que ayudará a la construcción de territorios seguros y resilientes.
              </p>
              <button>Información</button>
            </div>
            <div className='forma'></div>
          </div>
        </div>
        <div className="mision pt-3">
          <div className='container-mision'>
            <span className='titulo-mision'>MISIÓN</span>
            <span className='texto-mision'>Contribuir a la reducción de la vulnerabilidad y el impacto de desastres, como parte integral del proceso de transformación y desarrollo de la Integración Centroamérica SICA'</span>
          </div>
        </div>
        <div className="detalles">
          <div className="row m-0 container-detalles">
            <div className="col-md-4 mb-2 item-detalle">
              <span className='number'>7</span>
              <span className='texto'>Paises activos con coordinación para asistencia</span>
            </div>
            <div className="col-md-4 mb-2 item-detalle">
              <span className='number'>1200</span>
              <span className='texto'>Miembros de equipos de asistencia humanitaria</span>
            </div>
            <div className="col-md-4 mb-2 item-detalle">
              <span className='number'>23</span>
              <span className='texto'>Asistencias a desastres en la región</span>
            </div>
          </div>
        </div>
        <div className="cooperantes">
          <div className="container-cooperantes">
            <h6>Cooperantes</h6>
            <div className="container-img container">
              <img src="assets/img/usaid.jpeg" alt="usaid" />
              <img src="assets/img/ccrif.jpeg" alt="ccrif" />
              <img src="assets/img/cooperacion_suiza.png" alt="cooperacion" />
              <img src="assets/img/banco_mundial.png" alt="banco mundial" />
              <img src="assets/img/unicef.jpeg" alt="unicef" />
              <img src="assets/img/ocha.png" alt="ocha" />
            </div>  
          </div>
        </div>
        <div className="boletin">
          <div className="container-boletin">
            <h6>Boletín informativo</h6>
            <span>Suscríbete y recibe noticias </span>
            <div className="form-boletin">
              <label htmlFor="">* Email</label>
              <div className="form-input">
                <input type="email" placeholder='Ingresa tu email aquí' />
                <button>Suscríbete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio