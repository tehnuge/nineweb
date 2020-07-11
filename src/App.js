import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import * as Text from './text';
import HeaderComp from './HeaderComp';
import Home from './Home';
import Button from 'react-bootstrap/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const imgBg = "servers_t.png"
AOS.init();
//const imgBg = "https://news.sophos.com/wp-content/uploads/2019/07/shutterstock_571378933-compressor.jpg"
const App = () => {
  const titles = [
    { name: "Cloud Services", body: `${Text.CLOUD_WEB_HOSTING} ${Text.CLOUD_SERVER} ${Text.CLOUD_MAIL}` },  
    { name: Text.DOMAIN, body: Text.DOMAIN_D, bodyTitle: Text.DOMAIN_T },
    { name: Text.COLO, body: Text.COLO_D, bodyTitle: Text.COLO_T },
    { name: Text.SSL, body: Text.SSL_D, bodyTitle: Text.SSL_T },
    { name: Text.DED, body: Text.DED_D, bodyTitle: Text.DED_T },
    { name: "Contact Us", bodyTitle: "phone: +66 0 2722 9080 mobile: +66 8 5807 2443" }
  ]

  const cards = [
    { name: Text.CLOUD_WEB_HOSTING, li: Text.CWH_LI, href: "cloudwebhosting" },
    { name: Text.CLOUD_SERVER, li: Text.CS_LI, href: "cloudserver" },
    { name: Text.CLOUD_MAIL, li: Text.CM_LI, href: "cloudmail" }
  ]

  return (
    <Router>
      <div className="App">
        <div className="container">
        <header className="navbar d-flex align-items-baseline">
          <div>
            <img src="nineweb_mod.png" className="App-logo" alt="logo" />
          </div>
          <h1>{Text.NINE_WEB}</h1>
          {/* mobile */}
          <div className="tabs-m dropdown">
            <i className="fas fa-bars"></i>
            <div className="dropdown-content">
              <ul className="list-group">
                {titles.map(title =>
                  <li key = {title.name} className="list-group-item">{title.name}</li>
                )}
              </ul>
            </div>
          </div>
          <ul className="tabs navbar-nav-scroll flex-grow-1">
            <div className="titles d-flex justify-content-between">
              {titles.map(title => {
                return <HeaderComp key={title.name} name={title.name} body={title.body} bodyTitle={title.bodyTitle} />
              })}
            </div>
          </ul>
        </header>
        </div>
        <Switch>
          <Route exact path='/'>
            <Home cards={cards} imgBg={imgBg} />
          </Route>
          <Route path="/about">
            <h1>ABOUT</h1>
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
