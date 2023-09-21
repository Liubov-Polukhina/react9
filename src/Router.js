import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio/Inicio';
import App from './App/App';
import Info from './Components/Info';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Inicio />} />
            <Route path="/App/" element={<App />} />
            <Route path="/info" element={<Info />} />
            { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
            <Route path="*" element={<div>404</div>} />

        </Routes>
    </BrowserRouter>
);

export default Router;