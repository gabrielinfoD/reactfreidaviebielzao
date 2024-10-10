import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Consultar from './pages/consultarCanal';
import Cadastrar from './pages/cadastrarCanal';


export default function Navigate() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Consultar />} />
                <Route path='/cadastrarCanal' element={<Cadastrar />} />
            </Routes>
        </BrowserRouter>

    );

}









