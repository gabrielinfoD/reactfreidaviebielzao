import { useState } from 'react';
import axios from 'axios';
import './index.scss';


export default function Consultar() {
  
  const [listaCanal, setListaCanal] = useState([]);


  async function buscar() {
      const url = 'http://localhost:7000/emissora';
      let resp = await axios.get(url);
      setListaCanal(resp.data);
  }
  
  return (
    <div className="pagina-consultar ">
      <h1> CONSULTAR </h1>

      <button onClick={buscar}>Buscar</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Numero</th>
            <th>Aberto</th>
        
          </tr>
        </thead>

        <tbody>
          {listaCanal.map(item =>
            <tr>
              <td>{item.ID}</td>
              <td>{item.nome}</td>
              <td>{item.numero}</td>
              <td>{item.aberto ? 'Sim' : 'Não'}</td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}


