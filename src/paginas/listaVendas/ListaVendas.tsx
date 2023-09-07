import './ListaVendas.css';
import Venda from "../../models/Venda";
import { useSelector } from "react-redux";
import Produto from "../../models/Produto";
import { busca } from "../../services/Service";
import React, { useState, useEffect } from "react";
import { TokenState } from "../../store/tokens/TokensReducer";



export function ListaVendas() {
  const [vendas, setVendas] = useState<Venda[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  async function getVendas() {
    await busca("/historicovendas", setVendas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getVendas();
    console.log(vendas)
  }, []);


  return (
    <div className="listaPage">


      <div className="boxLista">
        <p className='titulo'>Histórico de Vendas</p>
        <input
          placeholder='Buscar Produto'
          className='inputBusca'
        />
        <div className="tabela">
          <table >
            <thead>
              <tr>
                <th className="tableTitles">Cod</th>
                <th className="tableTitles">Codc</th>
                <th className="tableTitles">Pedido</th>
                <th className="tableTitles">Data</th>
                <th className="tableTitles">Produtos</th>
                <th className="tableTitles">Retira</th>
                <th className="tableTitles">Entrega</th>
                <th className="tableTitles">Formac</th>
                <th className="tableTitles">Formam</th>
                <th className="tableTitles">Formad</th>
                <th className="tableTitles">Tipov</th>
                <th className="tableTitles">Tipoc</th>
                <th className="tableTitles">Vendedor</th>
              </tr>
            </thead>
            {vendas.map((venda) => (
              <tbody>
                <tr>
                  <td className='tableContent'>{venda.cod}</td>
                  <td className='tableContent'>{venda.codc}</td>
                  <td className='tableContent'>{venda.pedido}</td>
                  <td className='tableContent'>{venda.data.substring(0, 10)}</td>
                  <td className='tableContent'>{venda.produto?.descr}</td>
                  <td className='tableContent'>{venda.retira}</td>
                  <td className='tableContent'>{venda.entrega}</td>
                  <td className='tableContent'>{venda.formac}</td>
                  <td className='tableContent'>{venda.formam}</td>
                  <td className='tableContent'>{venda.formad}</td>
                  <td className='tableContent'>{venda.tipov}</td>
                  <td className='tableContent'>{venda.tipoc}</td>
                  <td className='tableContent'>{venda.usuario?.nome}</td>

                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>

  )
}