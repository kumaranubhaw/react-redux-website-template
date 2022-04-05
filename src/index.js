import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Provider} from 'react-redux'
import store from './store/store'

library.add(faFacebookF, faTwitter, faInstagram, faLinkedin); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Home />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
