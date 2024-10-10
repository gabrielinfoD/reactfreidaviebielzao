import './index.scss'
import { useState } from 'react'


import axios from 'axios'


export default function Cadastrar() {

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [aberto, setAberto] = useState(false);
    


    async function salvar() {
        const paramCorpo = {
            "nome": nome,
            "numero": numero,
            "aberto": aberto,
            
        }

        const url = 'http://localhost:7000/emissora';
        let resp = await axios.post(url, paramCorpo);

        alert('Canal adicionado na emissora . Id: ' + resp.data.novoId);
    }



    return (
        <div className='pagina-cadastrar '>

            <h1> CADASTRAR </h1>


            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Numero:</label>
                    <input type='text' value={numero} onChange={e => setNumero(e.target.value)} />
                </div>
                <div>
                    <label>Canal Aberto:</label>
                    <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
                </div>
               
            </div>
            <button onClick={salvar}> SALVAR </button>



        </div>

    );
}

