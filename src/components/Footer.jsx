import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
	return (
		<footer>
			<p>Copyright &copy; 2022 All rights reserved</p>
			<div class="socials">
				<a href="/">
					<FaGithub size={24} />
				</a>
				<a href="/">
					<FaTwitter size={24} />
				</a>
				<a href="/">
					<FaInstagram size={24} />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
