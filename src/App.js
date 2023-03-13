import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import './components/Navbar/Navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Apple } from "../src/components/pages/Apple/Apple";
import {Xiaomi} from '../src/components/pages/Xiaomi/Xiaomi'
import {Samsung} from '../src/components/pages/Samsung/Samsung'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/apple" element={<Apple/>} />
          <Route path="/samsung" element={<Samsung/>} />
          <Route path="/xiaomi" element={<Xiaomi/>} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>

        
        
        
        
    </BrowserRouter>
  );
}

export default App;
