import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Education from './Component/Education/Education';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Project from './Component/Project/Project';
import Skills from './Component/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
