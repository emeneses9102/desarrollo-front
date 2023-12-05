import React from 'react'
import './tipoAlerta.css'
import Iframe from 'react-iframe'
import { useState } from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { directions } from '../../../Utils/directions'


const TipoAlerta = () => {
  const [itemAlert, setItemAlert] = useState()
  const { tipoAlerta } = useParams();

  useEffect(() => {
    const foundItem = directions.find(item => item.param === tipoAlerta);
    if (foundItem) {
      setItemAlert(foundItem);
    } else {
      // Puedes manejar el caso cuando no se encuentra el tipo de alerta
      console.error('Tipo de alerta no encontrado');
    }
  }, [itemAlert])

  if (!itemAlert) {
    // Puedes mostrar algún mensaje de carga o manejar el caso cuando itemAlert no está disponible
    return <div>Cargando...</div>;
  }

  return (
    <div>
        <div className='alerta'>
          <div className="container" style={{position:"relative"}}>
            <section className='text-center'>
            <h2 className='titulo-alerta'>{itemAlert.title}</h2>
                <span className='subtitulo-item-alerta'>{itemAlert.subTitle}</span>
                <div className="items-alerta justify-content-center pt-4 mb-5">
                    <Iframe url={itemAlert.url}
                        width="80%"
                        height="520px"
                        id=""
                        className=""
                        display="block"
                        position="relative"
                    />
                </div>
                <span className='item-alerta-referencia'>Fuente: {itemAlert.reference}</span>
            </section>
          </div>
        </div>
    </div>
  )
}

export default TipoAlerta