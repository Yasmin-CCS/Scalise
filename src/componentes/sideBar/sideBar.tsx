import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './sideBar.css';

export function SideBar() {

  const navigate = useNavigate()



  return(
    <>
      <div className="sideBar">
        <p className="sideBarTitle">Produtos</p>
        <Link to="/listaproduto" className="sideBarItem">Meus Produtos</Link>
        <Link to="/cadastrarproduto" className="sideBarItem">Cadastrar Produtos</Link>

        <p className="sideBarTitle">Clientes</p>
        <Link to="/listacliente" className="sideBarItem">Meus Clientes</Link>
        <Link to="/cadastrarcliente" className="sideBarItem">Cadastrar Clientes</Link>

        <p className="sideBarTitle">Vendas</p>
        <Link to="/listavenda" className="sideBarItem">Histórico de Vendas</Link>

      </div>
    </>
  )
}