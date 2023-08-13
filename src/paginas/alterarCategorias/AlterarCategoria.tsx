import React from 'react';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './AlterarCategoria.css';

export function AlterarCategoria() {
  return (
    <div className="cadastrarClientePage">
      <div className="cadastrarCliente">
        <SideBar />
        <div className="boxCadastrarCliente">
          <p className='titulo'>Alterar Cliente</p>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>Categoria</p>
              <input className='shortInput fullInput'></input>
            </div>
          </div>
          <div className="buttonDivAlt">
            <button className='buttonEntrar buttonRed'>Deletar</button>
            <button className='buttonEntrar buttonGreen'>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  )
}