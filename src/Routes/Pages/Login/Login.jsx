import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='container-login row m-0'>
      <div className="col-lg-6 col-md-6 align-items-center d-flex justify-content-center section-logo" >
        <div className='container-logo'>
          <img className="img-fluid" src="assets/img/logo1.jpeg" alt="" />
          <span className='descripcion'>CENTRO DE COORDINACIÓN PARA LA PREVENCIÓN DE LOS DESATRES <br /> EN AMÉRICA CENTRAL Y REPÚBLICA DOMINICANA</span>
        </div>
      </div>
      <div className=" col-lg-6 col-md-6 section-login">
      <div className='formulario'>
       
      <form className='bg-white rounded '>
       <img className="img-fluid " src="assets/img/logo_cepredenac.png" alt="logo" />
        <h2>Iniciar sesión</h2>
        <div className="form-group mt-3">
          <label htmlFor="user">Nombre de usuario</label>
          <input type="text" placeholder='Usuario' className="form-control" id="user" aria-describedby="userHelp"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="form-control" id="password" placeholder='* * * * * *'/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="sessionCheck"/>
          <label className="form-check-label" for="sessionCheck">Mantener sesión</label>
        </div>
        <button type="submit" id='login' className="btn btn-block btn-primary btn-lg">Iniciar sesión</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Login