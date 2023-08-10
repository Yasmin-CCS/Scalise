import React from 'react';
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './CadastrarVendas.css';

export function CadastrarVendas() {
  return (
    <div className="cadastrarVendasPage">
      <div className="cadastrarVendas">
        <SideBar />
        <div className="boxCadastrarVendas">
          <p className='titulo'>Cadastrar Vendas</p>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Pedido</p>
              <input className='shortInput mediumInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Data</p>
              <input className='shortInput mediumInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Cod</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Descrição</p>
              <input className='shortInput longInput'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Bit</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Pv</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>QPE</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Nome</p>
              <input className='shortInput longInput'></input>
            </div>
          </div>
          <div className='divsForms'>
          <div className='divInputGeral'>
              <p>Entrega</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Retira</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Tipov</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Tipoc</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Codc</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Hora</p>
              <input className='shortInput mediumInput'></input>
            </div>
            </div>
            <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Formam</p>
              <input className='shortInput mediumInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Formac</p>
              <input className='shortInput mediumInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Formad</p>
              <input className='shortInput mediumInput'></input>
            </div>
          </div>
          <div className="buttonDiv">
            <button className='buttonEntrar buttonGreen'>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  )
}