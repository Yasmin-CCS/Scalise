
import React, { useState, useEffect, ChangeEvent } from "react";
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './CadastrarProduto.css';
import Produto from "../../models/Produto";
import { post } from "../../services/Service";

export function CadastrarProduto() {
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    cod: 0,
    qde: 0,
    descr: "",
    bit: "",
    pv: 0,
    obs: "",
    al: 0,
    origem: 0,
    cfop: 0,
    cest: 0,
    pc: 0,
    bst: 0,
    vst: 0,
    ipi: 0,
    iva: 0,
    fci: "",
  })

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    await post("/produtos", produto, setProduto);
  }

  return (
    <div className="cadastrarProdutoPage">
      <div className="cadastrarProduto">
        <SideBar />
        <form className="boxCadastrarProduto" onSubmit={onSubmit}>
          <p className='titulo'>Cadastrar Produto</p>
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
              <p>Qtde</p>
              <input
                className='shortInput smallInput'
                name="qtde"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral line1CadProd'>
              <p>Bit</p>
              <input
                className='shortInput inputLine1CadProd'
                name="bit"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral line1CadProd'>
              <p>PV</p>
              <input
                className='shortInput inputLine1CadProd'
                name="pv"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>Descrição</p>
              <input
                className='tallInput fullInput'
                name="descr"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputObs'>
              <p>Obs</p>
              <input
                className='shortInput input100'
                name="obs"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Estm</p>
              <input
                className='shortInput smallInput'
                name="estm"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Al</p>
              <input
                className='shortInput smallInput'
                name="al"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral line1CadProd'>
              <p>Origem</p>
              <input
                className='shortInput inputLine1CadProd'
                name="origem"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>CFOP</p>
              <input
                className='shortInput input100'
                name="cfop"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>CEST</p>
              <input
                className='shortInput input100'
                name="cest"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>NCM</p>
              <input
                className='shortInput input100'
                name="ncm"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Pc</p>
              <input
                className='shortInput input100'
                name="pc"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
            <div className='divInputGeral'>
              <p>Bst</p>
              <input
                className='shortInput mediumIput'
                name="bst"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
            <div className='divInputGeral'>
              <p>Vst</p>
              <input
                className='shortInput mediumIput'
                name="vst"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
            <div className='divInputGeral'>
              <p>Iva</p>
              <input
                className='shortInput mediumIput'
                name="iva"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
            <div className='divInputGeral'>
              <p>Ipi</p>
              <input
                className='shortInput mediumIput'
                name="ipi"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>FCI</p>
              <input
                className=' shortInput fullInput'
                name="fci"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
          </div>
          <div className="buttonDiv">
            <button
              className='buttonEntrar buttonGreen'
              type="submit"
            >
              Salvar
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}