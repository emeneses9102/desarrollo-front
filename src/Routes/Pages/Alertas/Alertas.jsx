import React from 'react'
import './Alertas.css'
import ItemAlert from '../../../Components/ItemsAlert/ItemAlert'


const Alerts = () => {
  return (
    <div>
      <div className='alerta'>
          <div className="container" style={{position:"relative"}}>
              <section className='text-center'>
                <h2 className='titulo-alerta'>Meteorología y Clima</h2>
                <span className='subtitulo-alerta'>Mapas relacionados con patrones climáticos, ciclones, y datos meteorológicos.</span>
                <div className="items-alerta">
                  <ItemAlert 
                    titulo={'NOAA GOES'} 
                    img={'assets/img/alerts/noaa_goes.png'} 
                    target={'blank'}
                    url={'https://www.star.nesdis.noaa.gov/goes/sector.php?sat=G16&sector=cam'}
                  />
                  <ItemAlert 
                    titulo={'Centro Clima'} 
                    img={'assets/img/alerts/centro_clima.png'} 
                    url={'/alertas/centro_lima'}
                  />
                </div>
              </section>
              <section className='text-center'>
                <h2 className='titulo-alerta'>Gestión de Desastres</h2>
                <span className='subtitulo-alerta'>Mapas de situaciones de desastres actuales y potenciales.</span>
                <div className="items-alerta">
                  <ItemAlert 
                    titulo={'NASA Disaster Mapping'} 
                    img={'assets/img/alerts/nasa_disaster.png'} 
                    url={'/alertas/nasa_disaster'}
                  />
                  <ItemAlert 
                    titulo={'GWIS'} 
                    img={'assets/img/alerts/gwis.png'} 
                    url={'/alertas/gwis'}
                  />
                </div>
              </section>
              <section className='text-center'>
                <h2 className='titulo-alerta'>Análisis de Riesgo de Inundaciones</h2>
                <span className='subtitulo-alerta'>Mapas de pronósticos y seguimientos de inundaciones.</span>
                <div className="items-alerta">
                  <ItemAlert 
                    titulo={'Global Floods'} 
                    img={'assets/img/alerts/global_floods.png'} 
                    target={'blank'}
                    url={'https://www.globalfloods.eu/accounts/login/?next=/glofas-forecasting/'}
                  />
                  <ItemAlert 
                    titulo={'GeoGlows'} 
                    img={'assets/img/alerts/geoglows.png'} 
                    url={'/alertas/geoglows'}
                  />
                </div>
              </section>
              <section className='text-center'>
                <h2 className='titulo-alerta'>Vigilancia de Incendios</h2>
                <span className='subtitulo-alerta'>Mapas de monitoreo de incendios activos y áreas de riesgo.</span>
                <div className="items-alerta">
                  <ItemAlert 
                    titulo={'FIRMS'} 
                    img={'assets/img/alerts/firms.png'} 
                    url={'/alertas/firms'}
                  />
                  
                </div>
              </section>
              <section className='text-center'>
                <h2 className='titulo-alerta'>Otros</h2>
                <span className='subtitulo-alerta'>Mapas de pronósticos y seguimientos de inundaciones.</span>
                <div className="items-alerta">
                  <ItemAlert 
                    titulo={'Gestión Integral del Riesgo de Desastres - Nicaragua'}
                    subtitulo={'Estudios Científicos para la Gestión Integral del Riesgo de Desastres.'} 
                    img={'assets/img/alerts/gestion_integral_nicaragua.png'} 
                    url={'/alertas/gestion_nicaragua'}
                  />
                  <ItemAlert 
                    titulo={'Análisis multi amenazas - Guatemala'} 
                    subtitulo={'Panel de Control Geoespacial en ArcGIS'} 
                    img={'assets/img/alerts/analisis_amenazas_guatemala.png'} 
                    url={'/alertas/amenazas_guatemala'}
                  />
                  <ItemAlert 
                    titulo={'Sistema Nacional de Protección Civil - Panamá'} 
                    subtitulo={'Panel de Control Geoespacial en ArcGIS'} 
                    img={'assets/img/alerts/sistema_nacional_panama.png'} 
                    target={'blank'}
                    url={'https://www.sinaproc.gob.pa/'}
                  />
                </div>
              </section>
              <section className='text-center'>
                <h2 className='titulo-alerta'>Monitoreo de Amenazas</h2>
                <div className="items-alerta">
                  <ItemAlert 
                    titulo={'Ciclones activos'}
                    img={'assets/img/alerts/ciclones_activos.png'} 
                    url={'#'}
                  />
                  <ItemAlert 
                    titulo={'Incendios Forestales'} 
                    img={'assets/img/alerts/incendios_forestales.png'} 
                    url={'#'}
                  />
                  <ItemAlert 
                    titulo={'Huracanes'} 
                    img={'assets/img/alerts/huracanes.png'} 
                    url={'#'}
                  />
                </div>
              </section>
              <section className='text-center'>
                <h2 className='titulo-alerta'>Hidrometeorológicos</h2>
                <div className="items-alerta">
                  <ItemAlert 
                    titulo={'Clima'}
                    img={'assets/img/alerts/clima.png'} 
                    url={'#'}
                  />
                  <ItemAlert 
                    titulo={'Inundaciones'} 
                    img={'assets/img/alerts/inundaciones.png'} 
                    url={'#'}
                  />
                  <ItemAlert 
                    titulo={'Ríos Atmosféricos'} 
                    img={'assets/img/alerts/rios_atmosfericos.png'} 
                    url={'#'}
                  />
                </div>
              </section>
              <section className='text-center'>
                <h2 className='titulo-alerta'>Geológicos</h2>
                <div className="items-alerta">
                  <ItemAlert 
                    titulo={'Erupciones Volcánicas'}
                    img={'assets/img/alerts/erupciones_volcanicas.png'} 
                    url={'#'}
                  />
                  <ItemAlert 
                    titulo={'Sequías'} 
                    img={'assets/img/alerts/sequias.png'} 
                    url={'#'}
                  />
                  <ItemAlert 
                    titulo={'Sismos'} 
                    img={'assets/img/alerts/sismos.png'} 
                    url={'#'}
                  />
                </div>
              </section>
        </div>
       
      </div>
    </div>
  )
}

export default Alerts