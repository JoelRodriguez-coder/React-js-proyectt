import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import './components/Navbar/Navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./components/Item/Item";

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='Joel Rodriguez'/>
      <Item/> 
      
    </div>

  );
}

export default App;
