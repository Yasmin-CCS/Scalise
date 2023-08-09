import React from 'react';
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './AlterarProduto.css';

export function AlterarProduto() {
  return (
    <div className="cadastrarProdutoPage">
      <NavBar />
      <div className="cadastrarProduto">
        <SideBar />
        <div className="boxCadastrarProduto">
          <p className='titulo'>Alterar Produto</p>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Cod</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Qtde</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral line1CadProd'>
              <p>Bit</p>
              <input className='shortInput inputLine1CadProd'></input>
            </div>
            <div className='divInputGeral line1CadProd'>
              <p>PV</p>
              <input className='shortInput inputLine1CadProd'></input>
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>Descrição</p>
              <input className='tallInput fullInput'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputObs'>
              <p>Obs</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral'>
              <p>Estm</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Al</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral line1CadProd'>
              <p>Origem</p>
              <input className='shortInput inputLine1CadProd'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>CFOP</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>CEST</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>NCM</p>
              <input className='shortInput input100'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Pc</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral'>
              <p>Bst</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Vst</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Iva</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Ipi</p>
              <input className='shortInput mediumIput'></input>
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>FCI</p>
              <input className=' shortInput fullInput'></input>
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