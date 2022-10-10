import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
	return (
		<footer>
			<p>Copyright &copy; 2022 All rights reserved</p>
			<div class="socials">
				<a href="/">
					<FaGithub />
				</a>
				<a href="/">
					<FaTwitter />
				</a>
				<a href="/">
					<FaInstagram />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
