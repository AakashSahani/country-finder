import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
	return (
		<footer>
			<p>Copyright &copy; 2022 All rights reserved</p>
			<div className="socials">
				<a
					href="https://github.com/AakashSahani"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub size={24} />
				</a>
				<a
					href="https://github.com/AakashSahani"
					target="_blank"
					rel="noreferrer"
				>
					<FaTwitter size={24} />
				</a>
				<a
					href="https://github.com/AakashSahani"
					target="_blank"
					rel="noreferrer"
				>
					<FaInstagram size={24} />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
