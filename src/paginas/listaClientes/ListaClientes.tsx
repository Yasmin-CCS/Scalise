import React from 'react';
import { NavBar } from '../../componentes/navBar/navBar';
import { SideBar } from '../../componentes/sideBar/sideBar';
import './ListaClientes.css';

export function ListaClientes() {
  return (
    <div className="listaClientePage">
      <NavBar />
      <div className="listaCliente">
        <SideBar />
        <div className="boxlistaCliente">
          <p className='titulo'>Meus Clientes</p>
          <input 
          placeholder='Buscar Clientes'
          className='inputBusca'
          />
          <table >
      <thead>
        <tr>
          <th className="tableTitles">Cod</th>
          <th className="tableTitles">Esp</th>
          <th className="tableTitles">Nome</th>
          <th className="tableTitles">End</th>
          <th className="tableTitles">Num</th>
          <th className="tableTitles">Bai</th>
          <th className="tableTitles">Mun</th>
          <th className="tableTitles">UF</th>
          <th className="tableTitles">CODF</th>
          <th className="tableTitles">ID</th>
          <th className="tableTitles">Fon</th>
          <th className="tableTitles">Fonc</th>
          <th className="tableTitles">CEP</th>
          <th className="tableTitles">Fax</th>
          <th className="tableTitles">Enc</th>
          <th className="tableTitles">Bac</th>
          <th className="tableTitles">Muc</th>
          <th className="tableTitles">UFC</th>
          <th className="tableTitles">CEPC</th>
          <th className="tableTitles">CRE</th>
          <th className="tableTitles">Deb</th>
          <th className="tableTitles">DUO</th>
          <th className="tableTitles">Pem</th>
          <th className="tableTitles">Negativo</th>
          <th className="tableTitles">Valor</th>
          <th className="tableTitles">Datuf</th>
          <th className="tableTitles">CREB</th>
          <th className="tableTitles">Vencimento</th>
          <th className="tableTitles">Limite</th>
          <th className="tableTitles">Tipcli</th>
          <th className="tableTitles">E-mail</th>
          <th className="tableTitles">Cmun</th>
          <th className="tableTitles">Logradouro</th>
          <th className="tableTitles">Compl_Logr</th>
          <th className="tableTitles">Fimdemes</th>
          <th className="tableTitles">Datafimde</th>
          <th className="tableTitles">Obs_Vend</th>
          <th className="tableTitles">Obs_Fifa</th>
          <th className="tableTitles">Pagamento</th>
          <th className="tableTitles">Impfat</th>
          <th className="tableTitles">Gerfat</th>
          <th className="tableTitles">Mailfatu</th>
          <th className="tableTitles">Sembolet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='tableContent'>SCALI</td>
          <td className='tableContent'>E</td>
          <td className='tableContent'>SCALISE COM.DE MAT.PARA CONSTRUCAO LTDA</td>
          <td className='tableContent'>RUA VISCONDE DE INHOMERIM, 342</td>
          <td className='tableContent'>342</td>
          <td className='tableContent'>MOOCA</td>
          <td className='tableContent'>SAO PAULO</td>
          <td className='tableContent'>SP</td>
          <td className='tableContent'>53112322000199</td>
          <td className='tableContent'>111001120110</td>
          <td className='tableContent'>2605-4949/ 2065-1467</td>
          <td className='tableContent'>DR.LUIGI     (10/11)</td>
          <td className='tableContent'>03121-010</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>4012,10</td>
          <td className='tableContent'>2212,94</td>
          <td className='tableContent'>22/01/2021</td>
          <td className='tableContent'>3</td>
          <td className='tableContent'>10/09/2020</td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'></td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'></td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'>1</td>
          <td className='tableContent'>SCALISE.LOJA@TERRA.COM.BR, LUIZFSCALISE@GMAIL.COM</td>
          <td className='tableContent'>3550308</td>
          <td className='tableContent'>RUA VISCONDE DE INHOMERIM</td>
          <td className='tableContent'></td>
          <td className='tableContent'>0</td>
          <td className='tableContent'>10/09/2020</td>
          <td className='tableContent'></td>
          <td className='tableContent'></td>
          <td className='tableContent'>M</td>
          <td className='tableContent'>FALSE</td>
          <td className='tableContent'>FALSE</td>
          <td className='tableContent'></td>
          <td className='tableContent'></td>
        </tr>
        {/* {produtos.map((item) => (
          <tr key={item.id}>
            <td>{item.cod}</td>
            <td>{item.qtde}</td>
            <td>{item.bit}</td>
          </tr>
        ))} */}
        <tr>
          <td className='tableContent'>SCALI</td>
          <td className='tableContent'>E</td>
          <td className='tableContent'>SCALISE COM.DE MAT.PARA CONSTRUCAO LTDA</td>
          <td className='tableContent'>RUA VISCONDE DE INHOMERIM, 342</td>
          <td className='tableContent'>342</td>
          <td className='tableContent'>MOOCA</td>
          <td className='tableContent'>SAO PAULO</td>
          <td className='tableContent'>SP</td>
          <td className='tableContent'>53112322000199</td>
          <td className='tableContent'>111001120110</td>
          <td className='tableContent'>2605-4949/ 2065-1467</td>
          <td className='tableContent'>DR.LUIGI     (10/11)</td>
          <td className='tableContent'>03121-010</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>*</td>
          <td className='tableContent'>4012,10</td>
          <td className='tableContent'>2212,94</td>
          <td className='tableContent'>22/01/2021</td>
          <td className='tableContent'>3</td>
          <td className='tableContent'>10/09/2020</td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'></td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'></td>
          <td className='tableContent'>0,00</td>
          <td className='tableContent'>1</td>
          <td className='tableContent'>SCALISE.LOJA@TERRA.COM.BR, LUIZFSCALISE@GMAIL.COM</td>
          <td className='tableContent'>3550308</td>
          <td className='tableContent'>RUA VISCONDE DE INHOMERIM</td>
          <td className='tableContent'></td>
          <td className='tableContent'>0</td>
          <td className='tableContent'>10/09/2020</td>
          <td className='tableContent'></td>
          <td className='tableContent'></td>
          <td className='tableContent'>M</td>
          <td className='tableContent'>FALSE</td>
          <td className='tableContent'>FALSE</td>
          <td className='tableContent'></td>
          <td className='tableContent'></td>
        </tr>
      </tbody>
    </table>    
        </div>
      </div>
    </div>
  )
}