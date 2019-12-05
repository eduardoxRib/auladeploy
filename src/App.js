import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './screens/Header'
import Footer from './screens/Footer'
import Jogos from './screens/Jogos'
import PagJogo from './screens/PagJogo'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Jogos} />
        <Route path="/jogo/:id" component={PagJogo} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
