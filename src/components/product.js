import './product.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'

class Product extends Component {
	render() {
		return (
			<div>
				<h1 className="center-align">{this.props.menu.page.toUpperCase()}</h1>
				<div>Display content of product page</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(Product);