import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './paginas/login/Login';
import { CadastrarProduto } from './paginas/cadastrarProduto/CadastrarProduto';
import { AlterarProduto } from './paginas/alterarProduto/AlterarProduto';
import { CadastrarCliente } from './paginas/cadastrarClientes/CadastrarCliente';
import { AlterarCliente } from './paginas/alterarClientes/AlterarCliente'
import { ListaProdutos } from './paginas/listaProdutos/ListaProdutos'
import { ListaClientes } from './paginas/listaClientes/ListaClientes'
import { CadastrarVendas } from './paginas/cadastrarVendas/CadastrarVendas'
import { ListaVendas } from './paginas/listaVendas/ListaVendas'
import { NavBar } from './componentes/navBar/navBar';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastrarproduto" element={<CadastrarProduto />} />
          <Route path="/alterarproduto" element={<AlterarProduto />} />
          <Route path="/cadastrarcliente" element={<CadastrarCliente />} />
          <Route path="/cadastrarvenda" element={<CadastrarVendas />} />
          <Route path="/alterarcliente" element={<AlterarCliente />} />
          <Route path="/listaproduto" element={<ListaProdutos />} />
          <Route path="/listacliente" element={<ListaClientes />} />
          <Route path="/listavenda" element={<ListaVendas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
