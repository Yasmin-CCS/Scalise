import React from 'react';
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './ListaVendas.css';

export function ListaVendas() {
  return (
    <div className="listaProdutoPage">
      <NavBar />
      <div className="listaProduto">
        <SideBar />
        <div className="boxListaProduto">
          <p className='titulo'>Histórico de Vendas</p>
          <input 
          placeholder='Buscar Produto'
          className='inputBusca'
          />
          <table >
      <thead>
        <tr>
          <th className="tableTitles">Pedido</th>
          <th className="tableTitles">Data</th>
          <th className="tableTitles">Cod</th>
          <th className="tableTitles">Descrição</th>
          <th className="tableTitles">Bit</th>
          <th className="tableTitles">PV</th>
          <th className="tableTitles">Qpe</th>
          <th className="tableTitles">Nome</th>
          <th className="tableTitles">Entrega</th>
          <th className="tableTitles">Retira</th>
          <th className="tableTitles">Tipov</th>
          <th className="tableTitles">Tipoc</th>
          <th className="tableTitles">Codc</th>
          <th className="tableTitles">Hora</th>
          <th className="tableTitles">Formam</th>
          <th className="tableTitles">Formac</th>
          <th className="tableTitles">Formad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='tableContent'>732581</td>
          <td className='tableContent'>23/12/2022</td>
          <td className='tableContent'>8243</td>
          <td className='tableContent'>TRINCHA TIGRE  500</td>
          <td className='tableContent'>2</td>
          <td className='tableContent'>6,84</td>
          <td className='tableContent'>2,0</td>
          <td className='tableContent'>HENRIQUE</td>
          <td className='tableContent'>S</td>
          <td className='tableContent'>N</td>
          <td className='tableContent'>F</td>
          <td className='tableContent'>1</td>
          <td className='tableContent'>HOSPI</td>
          <td className='tableContent'>19:46:36</td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'>0,00</td>
        </tr>
        <tr>
          <td className='tableContent'>732581</td>
          <td className='tableContent'>23/12/2022</td>
          <td className='tableContent'>8243</td>
          <td className='tableContent'>TRINCHA TIGRE  500</td>
          <td className='tableContent'>2</td>
          <td className='tableContent'>6,84</td>
          <td className='tableContent'>2,0</td>
          <td className='tableContent'>HENRIQUE</td>
          <td className='tableContent'>S</td>
          <td className='tableContent'>N</td>
          <td className='tableContent'>F</td>
          <td className='tableContent'>1</td>
          <td className='tableContent'>HOSPI</td>
          <td className='tableContent'>19:46:36</td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'>0,00</td>
        </tr>
        {/* {produtos.map((item) => (
          <tr key={item.id}>
            <td>{item.cod}</td>
            <td>{item.qtde}</td>
            <td>{item.bit}</td>
          </tr>
        ))} */}

      </tbody>
    </table>    
        </div>
      </div>
    </div>
  )
}