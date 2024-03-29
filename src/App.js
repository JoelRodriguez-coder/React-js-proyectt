
import './components/Navbar/Navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";
import AppRouter from "./components/routes/AppRouter";


function App() {


  return (
    <LoginProvider>
      <CartProvider>
          <AppRouter/>
      </CartProvider>
    </LoginProvider>


  );
}

export default App;
