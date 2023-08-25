import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import pageWave from './Page/pageWave/pageWave';
import Home  from './Page/homePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
            <div>
                <ul className="Navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/">Sobre</a></li>
                    <li><Link to="/pageWave">Recursos</Link></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/pageWave" exact component={pageWave} />

      </div>
    </BrowserRouter>

  
  )

}

export default App;