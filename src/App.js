import React from 'react';
import YaziListesi from './components/YaziListesi';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import YaziDetayi from './components/YaziDetayi';
import YaziEkle from './components/YaziEkle';
import YaziDuzenle from './components/YaziDuzenle';
import YorumDuzenle from './components/YorumDuzenle';
function App() {



  return (
    <Router>

      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={YaziListesi} />
          <Route path="/posts/:id" exact component={YaziDetayi} />
          <Route path="/yaziekle" component={YaziEkle}/>
          <Route path="/posts/:id/edit" component = {YaziDuzenle}/>
          <Route path ="/posts/:post_id/comments/:id" exact component = {YorumDuzenle}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
