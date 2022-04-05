import './services.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'

class Services extends Component {
	render() {
		return (
			<div>
				<h1 className="center-align">{this.props.menu.page.toUpperCase()}</h1>
				<div>Display content of service page</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(Services);