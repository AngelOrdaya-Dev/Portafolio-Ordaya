import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Servicios from './components/Servicios/Servicios';
import Educacion from './components/Educacion/Educacion';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      <Servicios />
      <Educacion />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  )
}

export default App;
