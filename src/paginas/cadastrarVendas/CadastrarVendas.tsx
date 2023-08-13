import React, { useState, useEffect, ChangeEvent } from "react";
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './CadastrarVendas.css';
import Venda from '../../models/Venda'

export function CadastrarVendas() {

  const [vendas, setVendas] = useState<Venda>({
    id: 0,
    cod: 0,
    pedido: 0,
    data: new Date,
    entrega: "",
    retira: 0,
    tipoc: "",
    codc: 0,
    formam: 0,
    formac: 0,
    formad: 0,
    usuario: 0,
    produto: 0,
  })

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setVendas({
      ...vendas,
      [event.target.name]: event.target.value,
    });
  }


  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    await post("/historicovendas", vendas, setVendas);
  }


  return (
    <div className="cadastrarVendasPage">
      <div className="cadastrarVendas">
        <SideBar />
        <form className="boxCadastrarVendas">
          <p className='titulo'>Cadastrar Vendas</p>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Pedido</p>
              <input 
              className='shortInput mediumInput'></input>
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
        </form>
      </div>
    </div>
  )
}