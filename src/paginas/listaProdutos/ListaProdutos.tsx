import './ListaProdutos.css';
import Categoria from "../../models/Categoria";
import Produto from "../../models/Produto";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { busca } from "../../services/Service";
import { TokenState } from "../../store/tokens/TokensReducer";


export function ListaProdutos() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [produtos, setProdutos] = useState<Produto[]>([]);

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  async function getProdutos() {
    await busca("/produtos", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div className="listaPage">

      <div className="boxLista">
        <p className='titulo'>Meus Produtos</p>
        <input
          placeholder='Buscar Produto'
          className='inputBusca'
        />
        <div className='tabela'>
          <table >
            <thead>
              <tr>
                <th className="tableTitles">Cod</th>
                <th className="tableTitles">Qtde</th>
                <th className="tableTitles">Bit</th>
                <th className="tableTitles">PV</th>
                <th className="tableTitles">Descrição</th>
                <th className="tableTitles">Obs</th>
                <th className="tableTitles">Estm</th>
                <th className="tableTitles">Al</th>
                <th className="tableTitles">Origem</th>
                <th className="tableTitles">CFOP</th>
                <th className="tableTitles">CEST</th>
                <th className="tableTitles">NCM</th>
                <th className="tableTitles">Pc</th>
                <th className="tableTitles">Bst</th>
                <th className="tableTitles">Vst</th>
                <th className="tableTitles">Iva</th>
                <th className="tableTitles">Ipi</th>
                <th className="tableTitles">FCI</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr>
                  <td className="tableContent">{produto.cod}</td>
                  <td className="tableContent">{produto.qde}</td>
                  <td className="tableContent">{produto.bit}</td>
                  <td className="tableContent">{produto.pv}</td>
                  <td className="tableContent">{produto.descr}</td>
                  <td className="tableContent">{produto.obs}</td>
                  <td className="tableContent">{produto.estm}</td>
                  <td className="tableContent">{produto.al}</td>
                  <td className="tableContent">{produto.origem}</td>
                  <td className="tableContent">{produto.cfop}</td>
                  <td className="tableContent">{produto.cest}</td>
                  <td className="tableContent">{produto.ncm}</td>
                  <td className="tableContent">{produto.pc}</td>
                  <td className="tableContent">{produto.bst}</td>
                  <td className="tableContent">{produto.vst}</td>
                  <td className="tableContent">{produto.iva}</td>
                  <td className="tableContent">{produto.ipi}</td>
                  <td className="tableContent">{produto.fci}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}