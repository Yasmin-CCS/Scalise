import './CadastrarProduto.css';
import Produto from "../../models/Produto";
import { post, buscaId, busca } from "../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import React, { useState, useEffect, ChangeEvent } from "react";
import Categoria from "../../models/Categoria";


export function CadastrarProduto() {
  
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    categoria: "",
  });

  const [categorias, setCategorias] = useState<Categoria[]>([]);

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
    categoria: null,
  })

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  async function getCategorias() {
      await busca("/categorias", setCategorias, {
        headers: {
          Authorization: token,
        },
      });
  }

  useEffect(() => {
    getCategorias();
      buscaId(`/categorias/${categoria.id}`, setCategorias, {
        headers: {
          Authorization: token,
        },
      });
  }, []);
    

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
      categoria: categoria,
      
    });
  }

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(token)
    console.log(categoria)
    console.log(produto)
    await post("/produtos", produto, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  return (
    <div className="cadastrarProdutoPage">

        <form className="boxCadastrarProduto" onSubmit={onSubmit}>
          <p className='titulo'>Cadastrar Produto</p>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Cod</p>
              <input
                className='shortInput smallInput'
                type="number"
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
                type="number"
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
                type="text"
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
                type="number"
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
                type="text"
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
                type="text"
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
                type="number"
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
                type="number"
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
                type="number"
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
                type="number"
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
                type="number"
                name="cest"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
            <div className='divInputGeral divInputCadProdLinha3'>
              <p>NCM</p>
              <input
                type="number"
                className='shortInput input100'
                name="ncm"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral divInputPc'>
              <p>Pc</p>
              <input
                type="number"
                className='shortInput input100'
                name="pc"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                />
            </div>
            <div className='divInputGeral'>
              <p>Bst</p>
              <input
                className='shortInput mediumIput'
                type="number"
                name="bst"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
            <div className='divInputGeral'>
              <p>Vst</p>
              <input
                className='shortInput mediumIput'
                type="number"
                name="vst"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
            <div className='divInputGeral'>
              <p>Iva</p>
              <input
                className='shortInput mediumIput'
                type="number"
                name="iva"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
            <div className='divInputGeral'>
              <p>Ipi</p>
              <input
                className='shortInput mediumIput'
                type="number"
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
                type="number"
                name="fci"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                } />
            </div>
          </div>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <label>Categoria</label>
              <select
                className=' shortInput fullInput'
                name="categoria"
                onChange={(event) =>
                  buscaId(`/categorias/${event.target.value}`, setCategoria, {
                    headers: {
                      Authorization: token,
                    },
                  })
                }
                > 
                {
                  categorias.map((categoria) => (
                    <option 
                    value={categoria.id}>
                      {categoria.categoria}
                    </option>
                  ))
                }

              </select>
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
  )
}