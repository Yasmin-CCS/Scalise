import React from 'react';
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './ListaProdutos.css';

export function ListaProdutos() {
  return (
    <div className="listaProdutoPage">
      <NavBar />
      <div className="listaProduto">
        <SideBar />
        <div className="boxListaProduto">
          <p className='titulo'>Meus Produtos</p>
          <input 
          placeholder='Buscar Produto'
          className='inputBusca'
          />
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
        <tr>
          <td className='tableContent'>1961</td>
          <td className='tableContent'>24</td>
          <td className='tableContent'>3M  CARTEL</td>
          <td className='tableContent'>19,95</td>
          <td className='tableContent'>COMAND MINI SUPORT FIOS TRANSP</td>
          <td className='tableContent'></td>
          <td className='tableContent'>4</td>
          <td className='tableContent'></td>
          <td className='tableContent'>39259090</td>
          <td className='tableContent'>8</td>
          <td className='tableContent'>5102</td>
          <td className='tableContent'>1001700</td>
          <td className='tableContent'>12,40</td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'>3,25</td>
          <td className='tableContent'>0,0000</td>
          <td className='tableContent'>4B09CC22-F2D3-4C9B-974E-69F1629C3E90</td>
        </tr>
        {/* {produtos.map((item) => (
          <tr key={item.id}>
            <td>{item.cod}</td>
            <td>{item.qtde}</td>
            <td>{item.bit}</td>
          </tr>
        ))} */}
        <tr>
          <td className='tableContent'>1961</td>
          <td className='tableContent'>24</td>
          <td className='tableContent'>3M  CARTEL</td>
          <td className='tableContent'>19,95</td>
          <td className='tableContent'>COMAND MINI SUPORT FIOS TRANSP</td>
          <td className='tableContent'>adfgadfgadfgadfgadfgadfgadfgadfgadfg</td>
          <td className='tableContent'>4</td>
          <td className='tableContent'></td>
          <td className='tableContent'>39259090</td>
          <td className='tableContent'>8</td>
          <td className='tableContent'>5102</td>
          <td className='tableContent'>1001700</td>
          <td className='tableContent'>12,40</td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'>3,25</td>
          <td className='tableContent'>0,0000</td>
          <td className='tableContent'>4B09CC22-F2D3-4C9B-974E-69F1629C3E90</td>
        </tr>
      </tbody>
    </table>    
        </div>
      </div>
    </div>
  )
}