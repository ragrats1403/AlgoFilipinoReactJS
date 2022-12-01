import React from "react";
import'./Footer.css';
import FooterLogo from '../images/AlgoFilipinoLogo.png';
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Footer = () => (
	<div className='footer'>
		<div className='logo'>
			<img src={FooterLogo} alt='' />
			<p>AlgoFilipino</p>
		</div>
		<div className='icons'>
			<a href='#'>
				<FaTwitter />
			</a>
			<a href='#'>
				<FaFacebook />
			</a>
			<a href='#'>
				<FaInstagram />
			</a>
			<a href='#'>
				<FaLinkedin />
			</a>
    <div className="para">
      <p>by Algo Filipino Technologies</p>
    </div>
    
		</div>
	</div>
)

export default Footer;
