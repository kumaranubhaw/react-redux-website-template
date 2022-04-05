import './home.css';
import React, { Component } from 'react';
import renderIf from './renderIf'
import About from './about'
import Product from './product'
import Services from './services'
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    const { menu } = this.props;
    return (
      <div  className="container">
        {renderIf(menu.page === 'home',
          <div><h1 className="center-align">{menu.page.toUpperCase()}</h1>
          <div>Display content of home page</div></div>
          )}
        {renderIf(menu.page === 'about', <About />)}
        {renderIf(menu.page === 'product', <Product />)}
        {renderIf(menu.page === 'services', <Services />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(Home);
