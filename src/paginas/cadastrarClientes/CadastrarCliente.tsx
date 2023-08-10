import React from 'react';
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './CadastrarCliente.css';

export function CadastrarCliente() {
  return (
    <div className="cadastrarClientePage">
      <div className="cadastrarCliente">
        <SideBar />
        <div className="boxCadastrarCliente">
          <p className='titulo'>Cadastrar Cliente</p>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Cod</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Esp</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral line1CadCli'>
              <p>Nome</p>
              <input className='shortInput inputLine1CadCli'></input>
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>Endereço</p>
              <input className='tallInput fullInput'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Num</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Bai</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Mun</p>
              <input className='shortInput inputLine1CadCli'></input>
            </div>
            <div className='divInputGeral'>
              <p>UF</p>
              <input className='shortInput smallInput'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>CODF</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral divInputCadCliLinha3'>
              <p>ID</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral divInputCadCliLinha3'>
              <p>FON</p>
              <input className='shortInput input100'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>FONC</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>CEP</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>Fax</p>
              <input className='shortInput input100'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>ENC</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>BAC</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>MUC</p>
              <input className='shortInput input100'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>UFC</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>CEPC</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>CRE</p>
              <input className='shortInput smallInput'></input>
            </div>
            <div className='divInputGeral divInputPc'>
              <p>DEB</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral divInputPc'>
              <p>DUO</p>
              <input className='shortInput input100'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Pem</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral'>
              <p>Negativo</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Valor</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral divInputPc'>
              <p>Datuf</p>
              <input className='shortInput input100'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Creb</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral'>
              <p>Vencimento</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Limite</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral divInputPc'>
              <p>Tipcli</p>
              <input className='shortInput input100'></input>
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>E-mail</p>
              <input className=' shortInput fullInput'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Cmun</p>
              <input className='shortInput longInput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Logradouro</p>
              <input className='shortInput longInput'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Comp_logr</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral'>
              <p>Fimdemes</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Datafimd</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral divInputPc'>
              <p>Pagamento</p>
              <input className='shortInput input100'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Obs_Vend</p>
              <input className='tallInput longInput'></input>
            </div>
            <div className='divInputGeral '>
              <p>Obs_Fifa</p>
              <input className='tallInput longInput'></input>
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Impfat</p>
              <input className='shortInput input100'></input>
            </div>
            <div className='divInputGeral'>
              <p>Gerfat</p>
              <input className='shortInput mediumIput'></input>
            </div>
            <div className='divInputGeral'>
              <p>Sembolet</p>
              <input className='shortInput mediumIput'></input>
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>Mailfatu</p>
              <input className=' shortInput fullInput'></input>
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