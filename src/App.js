import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import './components/Navbar/Navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/Card/Card";

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='Joel Rodriguez'/>
      <Cards/> 
      
    </div>

  );
}

export default App;
