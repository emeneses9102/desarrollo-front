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
      <div className='visorf'>
          <div className="container" style={{position:"relative"}}>
              <span className='titulo-visor'>Alertas</span>
              <div style={{height:"250px",display:"flex", justifyContent:"center", alignItems:"center"}}>
                <iframe id="optomaFeed" src="https://www.arcgis.com/apps/mapviewer/index.html?url=https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Satellite_VIIRS_Thermal_Hotspots_and_Fire_Activity/FeatureServer/0" 
                  scrolling="no"
                  frameborder="0" 
                  height="1000px" 
                  width="80.5%" 
                  ></iframe>
            </div>
        </div>
        <iframe 
          style={{border:"none",width:"100px",height:"20px"}} 
          src="//e.issuu.com/embed.html#3217510/69974367" ></iframe>
      </div>
    </div>
  )
}

export default Alerts