import React from 'react';
import { NavBar } from '../../componentes/navBar/navBar';
import './Login.css';

export function Login() {
  return (
    <>
      <div className="loginPage">
        <div className="boxLogin">
          <p className='titulo'>Entrar</p>
          <div className='divInputLogin'>
            <p>Usuário</p>
            <input className='mediumInput inputLogin'></input>
          </div>
          <div className='divInputLogin'>
            <p>Senha</p>
            <input className='mediumInput inputLogin'></input>
          </div>
          <div className="buttonDiv">
            <button className='buttonEntrar buttonGreen'>Entrar</button>
          </div>
        </div>
      </div>
    </>
  )
}