import React, { Component } from "react"
import companyLogo from '../../logo.jpg'
import './header.css'
import { connect } from 'react-redux';
import { selectedPage } from '../../store/actions'

class Header extends Component {
	constructor() {
		super();
		this.state = {
			headerItems: ['home', 'about', 'product', 'services'],
		}
	}

	componentWillMount = () => {
		this.props.selectedPage('home');
	}

	handleToggle = (item) => {
		if(item === 'home'){
			this.props.selectedPage('home');
		} else {			
			this.props.selectedPage(item);
		}
	}

	render() {
		return (
			<header>
			    <div className="navbar-fixed">
			        <nav>
			            <div className="nav-wrapper white">
			            	<div className="container">
				                <div className="center hide-on-med-and-down">
				                    <ul>
				                    	<div className="left">
					                        <li>
					                            <img src={companyLogo} alt="Logo" className="responsive-img company-logo" />
					                        </li>
				                        </div>
				                        <div className="right">
				                        	{this.state.headerItems.map((item) =>
					                        	<li className={"bold text-color font small" + (item === this.props.menu.page ? ' active' : '' )} 
					                        	onClick={() => this.handleToggle(item)}>
						                        	<a>{item.toUpperCase()}</a>
						                        </li>
						                    )}
				                        </div>
				                    </ul>
				                </div>
			                </div>
			            </div>
			        </nav>
			    </div>
			</header>
		)
	}
}

const mapDispatchToProps = dispatch => {
    return {
        selectedPage: menu => dispatch(selectedPage(menu))
    }
}

const mapStateToProps = state => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)