import React from 'react'
import './Alertas.css'
import TableAlertsGeneral from "../../../Components/TableAlertsGeneral/TableAlertsGeneral"
import ChartCircleAlerts from "../../../Components/ChartCircleAlerts/ChartCircleAlerts"
import ChartLineAlerts from "../../../Components/ChartLineAlerts/ChartLineAlerts"
import InputSearch from "../../../Components/InputSearch/InputSearch"
import TableDetailCountry from "../../../Components/TableDetailCountry/TableDetailCountry"

const Alerts = () => {
  return (
    <div>
      <div className='alertas-container'>
          <div className="container">
              <span className='titulo-emergencias'>Alertas en la Región</span>        
              <span className='subtitle-alerts alertas-container-left'>General por País</span>    
              <TableAlertsGeneral />
          </div>
      </div>
      <div className='alertas-container'>
          <div className="container">
              <span className='subtitle-alerts alertas-container-left'>Alertas en la región</span>
              <div className='row justify-center'>
                <div className='col-lg-6 col-12'>
                  <ChartCircleAlerts />
                </div>    
                <div className='col-lg-6 col-12'>
                  <ChartLineAlerts />
                </div>    
              </div>
          </div>
      </div>
      <div className='alertas-container'>
          <div className="container">
              <div className='row'>
                <div className='col-lg-6 col-12 text-center text-lg-left'>
                    <span className='subtitle-alerts alertas-container-left'>Detalle por País</span>
                </div>
                <div className='col-lg-6 col-12 text-center text-lg-right'>
                  <InputSearch />
                </div>
                <div className='row w-100 justify-content-center margin-table-detail-country'>
                  <TableDetailCountry />
                </div>
              </div>
          </div>
      </div>
      <div className='alertas-container'>
          <div className="container">
            <span className='subtitle-alerts alertas-container-left'>Mapas</span> 
          </div>
      </div>
    </div>
  )
}

export default Alerts