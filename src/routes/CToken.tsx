
import React from 'react';


import { Login } from '../paginas/login/Login';

import { Route, Routes } from 'react-router-dom';

import { AlterarCategoria } from '../paginas/alterarCategorias/AlterarCategoria';
import { AlterarCliente } from '../paginas/alterarClientes/AlterarCliente';
import { AlterarProduto } from '../paginas/alterarProduto/AlterarProduto';
import { CadastrarCategoria } from '../paginas/cadastrarCategoria/CadastrarCategoria';
import { CadastrarCliente } from '../paginas/cadastrarClientes/CadastrarCliente';
import { CadastrarProduto } from '../paginas/cadastrarProduto/CadastrarProduto';
import { CadastrarVendas } from '../paginas/cadastrarVendas/CadastrarVendas';
import { ListaClientes } from '../paginas/listaClientes/ListaClientes';
import { ListaProdutos } from '../paginas/listaProdutos/ListaProdutos';
import { ListaVendas } from '../paginas/listaVendas/ListaVendas';
import { SideBar } from '../componentes/sideBar/sideBar';

function CToken() {
  return (
    <>
      <div className='page'>
        <SideBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastrarproduto" element={<CadastrarProduto />} />
          <Route path="/cadastrarcategoria" element={<CadastrarCategoria />} />
          <Route path="/alterarproduto" element={<AlterarProduto />} />
          <Route path="/alterarcategoria" element={<AlterarCategoria />} />
          <Route path="/cadastrarcliente" element={<CadastrarCliente />} />
          <Route path="/cadastrarvenda" element={<CadastrarVendas />} />
          <Route path="/alterarcliente" element={<AlterarCliente />} />
          <Route path="/listaproduto" element={<ListaProdutos />} />
          <Route path="/listacliente" element={<ListaClientes />} />
          <Route path="/listavenda" element={<ListaVendas />} />
        </Routes>
      </div>
    </>
  )
}

export default CToken