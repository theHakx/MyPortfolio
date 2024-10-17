import './app.scss'
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';


const App = () => {
  return <div>
    <Cursor/>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id=''><Parallax type = 'services'/></section>
    <section id='Services'><Services/></section>
    <section id=''><Parallax type = 'portfolio'/></section>
    <Portfolio/>
    <section id='Contact' style={{background:''}}>
      <Contact/></section>
  </div>;
};

export default App;
