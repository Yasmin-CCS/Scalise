import React from 'react';
import './sideBar.css';

export function SideBar() {

  return(
    <>
      <div className="sideBar">
        <p className="sideBarTitle">Produtos</p>
        <p className="sideBarItem">Meus Produtos</p>
        <p className="sideBarItem">Cadastrar Produtos</p>

        <p className="sideBarTitle">Clientes</p>
        <p className="sideBarItem">Meus Clientes</p>
        <p className="sideBarItem">Cadastrar Clientes</p>

        <p className="sideBarTitle">Vendas</p>
        <p className="sideBarItem">Histórico de Vendas</p>

      </div>
    </>
  )
}