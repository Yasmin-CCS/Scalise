
import React, { useState, useEffect, ChangeEvent } from "react";
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './CadastrarCategoria.css';
import Categoria from "../../models/Categoria";
import { busca, buscaId, put, post } from "../../services/Service";

export function CadastrarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    categoria:''
  })

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
        await post("/categorias", categoria, setCategoria);
      }

        return (
          <div className="cadastrarProdutoPage">
            <div className="cadastrarProduto">
              <SideBar />
              <form className="boxCadastrarProduto">
                <p className='titulo'>Cadastrar Categoria</p>
                <div className='divsForms2'>
                  <div className='divInputGeral'>
                    <p>Categoria</p>
                    <input className='shortInput fullInput'></input>
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