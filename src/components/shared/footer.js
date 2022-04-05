import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footer = () => {
	return (
		<footer className="page-footer mtxl">
			<div className="container">
				<div className="row">
					<div className="col s2 offset-s2 offset-m4 m1">
						<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={['fab', 'facebook-f']} className="white-text" />
						</a>
					</div>
					<div className="col s2 m1">
						<a href="https://twitter.com/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={['fab', 'twitter']} className="white-text" />
						</a>
					</div>
					<div className="col s2 m1">
						<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={['fab', 'instagram']} className="white-text" />
						</a>
					</div>
					<div className="col s2 m1">
						<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={['fab', 'linkedin']} className="white-text" />
						</a>
					</div>
				</div>
			    <div className="row mbn">
			        <div className="col s12">
			            <div className="white-text center">
			                ©︎ {(new Date().getFullYear())} Company Name
			            </div>
			        </div>
			        <div class="col s12">
			            <div class="center">
			                POWRED BY Company Name
			            </div>
			        </div>
			    </div>
		    </div>
		</footer>	
	)
}

export default footer