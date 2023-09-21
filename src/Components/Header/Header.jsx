import React from 'react'
import './Header.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <>
        <div className="layer">
            <div className="contenedor contenedor-layer">
                <div className="contenedor-logo">
                    <span><i className="fa-solid fa-globe"></i></span>
                    <span>Página web oficial del Centro de Coordinación para la prevención de desastres para América Central y República Dominicana.</span>
                </div>
                <div className="links">
                    <a href="#">Español</a>
                    <a href="#">Inglés</a>
                    <a href="#">Registro</a>
                </div>
            </div>
        </div>
        <div className='navbar nav-initial'>
            <div className="contenedor">
                <div className="contenedor-logo">
                    <img src="assets/img/logo_cepredenac.png" alt="logo-cepredenac" />
                    <div className="contenedor-input">
                        <input type="search" placeholder='Buscar...' />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div> 
                </div>
                <div className="links">
                    <span>Información</span>
                    <span className='link-asistencia'><i className="fa-solid fa-plus"></i>Asistencia</span>
                    <span className='link-login' ><i className="fa-solid fa-circle-user"></i>Entrar</span>
                </div> 
            </div>

        </div>
        <NavBar/>
    </>
  )
}

export default Header