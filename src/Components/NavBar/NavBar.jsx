import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg __navbar'>
      <div className='container-button p-3 '>
        <div className="contenedor-logo logo-nav">
            <a href="/"><img src="assets/img/logo_cepredenac.png" alt="logo-cepredenac" /></a>
        </div>
        <div className="links-navbar container">
          <span>Información</span>
          <span className='link-asistencia'><i className="fa-solid fa-plus"></i>Asistencia</span>
          <span className='link-login' ><i className="fa-solid fa-circle-user"></i><a href="/login">Entrar</a></span>
        </div> 
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span><i className="fa-solid fa-bars"></i></span>
        </button>
      </div>
      
        <div className="__container collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="links navbar-nav">
              <li className='nav-item'>
              <NavLink to={'/inicio'} className={({ isActive, isPending }) =>
                    isPending ? "pending nav-item" : isActive ? "active nav-item" : ""
                  }>Inicio</NavLink>
              </li>
              <li className='nav-item'>
              <NavLink to={'/alertas'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Alertas</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to={'/manejo-emergencia'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Manejo de Emergencias</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to={'/flujo'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Flujograma Mec-Reg</NavLink>
              </li>
              <li className='nav-item'>
              <NavLink to={'/visor'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Visor</NavLink>
              </li>
              <li className='nav-item'>
              <NavLink to={'/noticias'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Noticias</NavLink>
              </li>
              <li className='nav-item'>
              <NavLink to={'/acerca'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Acerca de Cepredenac</NavLink>
              </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar