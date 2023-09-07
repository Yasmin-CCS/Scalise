
import React, { useState, ChangeEvent } from "react";
import './CadastrarCategoria.css';
import Categoria from "../../models/Categoria";
import { post } from "../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";

export function CadastrarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    categoria: ""
  })

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    await post("/categorias", categoria, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="cadastrarProdutoPage">

        <form className="boxCadastrarProduto" onSubmit={onSubmit}>
          <p className='titulo'>Cadastrar Categoria</p>
          <div className='divsForms2'>
            <div className='divInputGeral'>
              <p>Categoria</p>
              <input
                name="categoria"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                className='shortInput fullInput'></input>
            </div>
          </div>
          <div className="buttonDiv">
            <button type="submit" className='buttonEntrar buttonGreen'>Salvar</button>
          </div>
        </form>

    
    </div>
  )
}