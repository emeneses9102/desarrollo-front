import React from 'react'
import './Visor.css'

const Visor = () => {
  return (
    <div className='visor'>
        <div className="container" style={{position:"relative"}}>
            <span className='titulo-visor'>Visor mapa Arcgis</span>
            <div style={{height:"250px",display:"flex", justifyContent:"center", alignItems:"center"}}>
              <iframe id="optomaFeed" src="https://plataformaregional.cepredenac.org/portal/apps/experiencebuilder/experience/?id=a43dab70449e47238d6e1d3413ac0c10" 
                scrolling="no"
                frameborder="0" 
                height="1000px" 
                width="72.5%" 
                ></iframe>
          </div>
      </div>
      <iframe 
        style={{border:"none",width:"525px",height:"340px"}} 
        src="//e.issuu.com/embed.html#3217510/69974367" ></iframe>
    </div>
  )
}

export default Visor