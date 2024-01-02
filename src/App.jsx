import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.jsx';
import Busca from './Components/Busca/Busca.jsx';
import ListaProdutos from './Components/Produtos/ListaProdutos.jsx';

function App() {

  return (
    <>
      <Header />
      <Busca />
      <ListaProdutos />
    </>
  )
}

export default App
