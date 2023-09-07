import React, { useState, useEffect, ChangeEvent } from "react";
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './CadastrarVendas.css';
import Venda from '../../models/Venda'
import { post, busca, buscaId } from "../../services/Service";
import Produto from "../../models/Produto";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";


export function CadastrarVendas() {

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  // a descrição dos produtos armazenada numa lista
  // depois vai ter q fazer um map nessa lista pra puxar os objetos do backend um por um
  const [produto, setProduto] = useState([])

  const [produtoFim, setProdutoFim] = useState<Produto>({
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

  const [produtos, setProdutos] = useState<Produto[]>([]);

  const [vendas, setVendas] = useState<Venda>({
    id: 0,
    cod: 0,
    pedido: 0,
    data: "",
    entrega: "",
    retira: "",
    tipoc: 0,
    tipov: 0,
    codc: 0,
    formam: 0,
    formac: 0,
    formad: 0,
    usuario: null,
    produto: null,
  })

  function updateModelProd(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
    });
    idProduto()
    updateModel(event)
    console.log(vendas)
  }
  
    async function idProduto() {
      busca(`/produtos/produto/${produto.descr}`, setProdutos, {
      headers: {
        Authorization: token,
      },
    });
        produtos.map(produto => setProdutoFim(produto));       
    }


  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setVendas({
      ...vendas,
      [event.target.name]: event.target.value,
      produto: produtoFim,
      
    });
  }
  
  
  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    console.log(vendas)
    event.preventDefault();
    await post("/historicovendas", vendas, setVendas, {
      headers: {
        Authorization: token,
      },
    });
  }

  return (
    <div className="page">

        <form className="boxCadastrarCliente" onSubmit={onSubmit}>
          <p className='titulo'>Cadastrar Vendas</p>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Pedido</p>
              <input
                className='shortInput smallInput'
                name="pedido"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Data</p>
              <input
                className='shortInput mediumInput'
                name="data"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
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
              <p>Bit</p>
              <input
                className='shortInput smallInput'
                name="bit"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Pv</p>
              <input
                className='shortInput smallInput'
                name="pv"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>QPE</p>
              <input
                className='shortInput smallInput'
                name="qpe"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Descrição</p>
              <input
                className='shortInput longInput'
                name="descricao"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Nome</p>
              <input
                className='shortInput longInput'
                name="nome"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Entrega</p>
              <input
                className='shortInput smallInput'
                name="entrega"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Retira</p>
              <input
                className='shortInput smallInput'
                name="retira"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Tipov</p>
              <input
                className='shortInput smallInput'
                name="tipov"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Tipoc</p>
              <input
                className='shortInput smallInput'
                name="tipoc"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Codc</p>
              <input
                className='shortInput smallInput'
                name="codc"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Hora</p>
              <input
                className='shortInput mediumInput'
                name="hora"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
          </div>
          <div className='divsForms'>
            <div className='divInputGeral'>
              <p>Formam</p>
              <input
                className='shortInput smallInput'
                name="formam"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Formac</p>
              <input
                className='shortInput mediumInput'
                name="formac"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Formad</p>
              <input
                className='shortInput mediumInput'
                name="formad"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
            </div>
            <div className='divInputGeral'>
              <p>Produto</p>
              <input
                className='shortInput mediumInput'
                name="descr"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModelProd(event)
                }
              />
            </div>
          </div>
          <div className="buttonDiv">
            <button 
              className='buttonEntrar buttonGreen' 
              type="submit">
              Salvar
            </button>
          </div>
        </form>

    </div>
  )
}