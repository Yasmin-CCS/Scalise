import React, { useState, useEffect } from "react";
import './ListaClientes.css';
import Clientes from "../../models/Cliente";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { busca } from "../../services/Service";



export function ListaClientes() {

  const [cliente, setCliente] = useState<Clientes[]>([]);

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  async function getClientes() {
    await busca("/clientes", setCliente, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <div className="listaPage">

      <div className="boxLista">
        <p className='titulo'>Meus Clientes</p>
        <input
          placeholder='Buscar Clientes'
          className='inputBusca'
        />
        <div className="tabela">
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
              {cliente.map((cliente) => (
                <tr>
                  <td className="tableContent">{cliente.nome}</td>
                  <td className="tableContent">{cliente.endereco}</td>
                  <td className="tableContent">{cliente.num}</td>
                  <td className="tableContent">{cliente.bairro}</td>
                  <td className="tableContent">{cliente.mun}</td>
                  <td className="tableContent">{cliente.uf}</td>
                  {/* <td className="tableContent">{cliente.estm}</td> */}
                  <td className="tableContent">{cliente.codf}</td>
                  <td className="tableContent">{cliente.ierg}</td>
                  <td className="tableContent">{cliente.fone}</td>
                  <td className="tableContent">{cliente.fonc}</td>
                  {/* <td className="tableContent">{cliente.ncm}</td> */}
                  <td className="tableContent">{cliente.cep}</td>
                  <td className="tableContent">{cliente.fax}</td>
                  <td className="tableContent">{cliente.enc}</td>
                  <td className="tableContent">{cliente.bac}</td>
                  <td className="tableContent">{cliente.muc}</td>
                  <td className="tableContent">{cliente.ufc}</td>
                  <td className="tableContent">{cliente.cepc}</td>
                  <td className="tableContent">{cliente.cre}</td>
                  <td className="tableContent">{cliente.deb}</td>
                  <td className="tableContent">{cliente.duo}</td>
                  <td className="tableContent">{cliente.pem}</td>
                  <td className="tableContent">{cliente.neg}</td>
                  <td className="tableContent">{cliente.valor}</td>
                  <td className="tableContent">{cliente.datuf}</td>
                  <td className="tableContent">{cliente.creb}</td>
                  <td className="tableContent">{cliente.vencimento}</td>
                  <td className="tableContent">{cliente.limite}</td>
                  <td className="tableContent">{cliente.tipcli}</td>
                  <td className="tableContent">{cliente.email}</td>
                  <td className="tableContent">{cliente.cmun}</td>
                  <td className="tableContent">{cliente.logradouro}</td>
                  <td className="tableContent">{cliente.compl_logr}</td>
                  <td className="tableContent">{cliente.fimdemes}</td>
                  <td className="tableContent">{cliente.datafimd}</td>
                  <td className="tableContent">{cliente.obs_vend}</td>
                  <td className="tableContent">{cliente.obs_fifa}</td>
                  <td className="tableContent">{cliente.pagament}</td>
                  <td className="tableContent">{cliente.impfat}</td>
                  <td className="tableContent">{cliente.gerfat}</td>
                  <td className="tableContent">{cliente.mailfatu}</td>
                  <td className="tableContent">{cliente.semboleto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}