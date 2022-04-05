import './about.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'

class About extends Component {
	render() {
		return (
			<div>
				<h1 className="center-align">{this.props.menu.page.toUpperCase()}</h1>
				<div>Display content of about page</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(About)