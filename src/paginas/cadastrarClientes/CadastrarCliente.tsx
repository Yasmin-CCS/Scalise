import React, { useState, useEffect, ChangeEvent } from "react";
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './CadastrarCliente.css';
import Cliente from "../../models/Cliente";
import { post } from "../../services/Service";


export function CadastrarCliente() {
  
  const [cliente, setCliente] = useState<Cliente>({
    id: 0,
    nome: "",
    endereco: "",
    num: "",
    bairro: "",
    mun: "",
    uf: "",
    codf: "",
    ie_rg: "",
    fone: "",
    fonc: "",
    cep: 0,
    fax: 0,
    enc: "",
    bac: "",
    muc: "",
    ufc: "",
    cepc: "",
    cre: 0,
    deb: 0,
    duo: new Date,
    pem: "",
    neg: new Date,
    valor: "",
    datuf: new Date,
    creb: "",
    vencimento: "",
    limite: "",
    tipcli: "",
    email: "",
    cmun: "",
    logradouro: "",
    compl_logr: "",
    fimdemes: 0,
    datafimd: new Date,
    obs_vend: "",
    obs_fifa: "",
    pagament: "",
    impfat: new Boolean,
    gerfat: new Boolean,
    mailfatu: "",
    semboleto: "",
  })

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setCliente({
      ...cliente,
      [event.target.name]: event.target.value,
    });
  }


  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    await post("/cliente", cliente, setCliente);
  }

  return (
    <div className="cadastrarClientePage">
      <div className="cadastrarCliente">
        <SideBar />
        <form className="boxCadastrarCliente" onSubmit={onSubmit}>
          <p className='titulo'>Cadastrar Cliente</p>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Cod</p>
              <input
                className='shortInput smallInput'
                name="cod"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Esp</p>
              <input
                className='shortInput smallInput'
                name="esp"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral line1CadCli'>
              <p>Nome</p>
              <input
                className='shortInput inputLine1CadCli'
                name="nome"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>Endereço</p>
              <input
                className='tallInput fullInput'
                name="endereco"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Num</p>
              <input
                className='shortInput smallInput'
                name="num"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Bai</p>
              <input
                className='shortInput mediumIput'
                name="bai"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Mun</p>
              <input
                className='shortInput inputLine1CadCli'
                name="mun"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>UF</p>
              <input
                className='shortInput smallInput'
                name="uf"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>CODF</p>
              <input
                className='shortInput input100'
                name="codf"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputCadCliLinha3'>
              <p>ID</p>
              <input
                className='shortInput input100'
                name="ie_rg"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputCadCliLinha3'>
              <p>FON</p>
              <input
                className='shortInput input100'
                name="fon"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>FONC</p>
              <input
                className='shortInput input100'
                name="fonc"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>CEP</p>
              <input
                className='shortInput input100'
                name="cep"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>Fax</p>
              <input
                className='shortInput input100'
                name="fax"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>ENC</p>
              <input
                className='shortInput input100'
                name="enc"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>BAC</p>
              <input
                className='shortInput input100'
                name="bac"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>MUC</p>
              <input
                className='shortInput input100'
                name="muc"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>UFC</p>
              <input
                className='shortInput smallInput'
                name="ufc"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>CEPC</p>
              <input
                className='shortInput smallInput'
                name="cepc"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>CRE</p>
              <input
                className='shortInput smallInput'
                name="cre"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputPc'>
              <p>DEB</p>
              <input
                className='shortInput input100'
                name="deb"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputPc'>
              <p>DUO</p>
              <input
                className='shortInput input100'
                name="duo"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Pem</p>
              <input
                className='shortInput input100'
                name="pem"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Negativo</p>
              <input
                className='shortInput mediumIput'
                name="negativo"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Valor</p>
              <input
                className='shortInput mediumIput'
                name="valor"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputPc'>
              <p>Datuf</p>
              <input
                className='shortInput input100'
                name="datuf"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Creb</p>
              <input
                className='shortInput input100'
                name="creb"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Vencimento</p>
              <input
                className='shortInput mediumIput'
                name="vencimento"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Limite</p>
              <input
                className='shortInput mediumIput'
                name="limite"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputPc'>
              <p>Tipcli</p>
              <input
                className='shortInput input100'
                name="tipcli"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>E-mail</p>
              <input
                className=' shortInput fullInput'
                name="email"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Cmun</p>
              <input
                className='shortInput longInput'
                name="cmun"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Logradouro</p>
              <input
                className='shortInput longInput'
                name="logradouro"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Comp_logr</p>
              <input
                className='shortInput input100'
                name="comp_logr"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Fimdemes</p>
              <input
                className='shortInput mediumIput'
                name="fimdemes"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Datafimd</p>
              <input
                className='shortInput mediumIput'
                name="datafimd"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputPc'>
              <p>Pagamento</p>
              <input
                className='shortInput input100'
                name="pagamento"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Obs_Vend</p>
              <input
                className='tallInput longInput'
                name="obs_vend"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral '>
              <p>Obs_Fifa</p>
              <input
                className='tallInput longInput'
                name="obs_fifa"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Impfat</p>
              <input
                className='shortInput input100'
                name="impfat"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Gerfat</p>
              <input
                className='shortInput mediumIput'
                name="gerfat"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Sembolet</p>
              <input
                className='shortInput mediumIput'
                name="sembolet"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>Mailfatu</p>
              <input
                className=' shortInput fullInput'
                name="mailfatu"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
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