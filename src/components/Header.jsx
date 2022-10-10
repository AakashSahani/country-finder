import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<div class="logo">
				<Link to="/">
					<img src={require('../images/earth.jpg')} alt="Earth Logo" />
				</Link>
				{/* <a href="/">
				</a> */}
			</div>
			<ul class="nav">
				<li class="btn">
					<Link to="/">Home</Link>
					{/* <a href="/home">Home</a> */}
				</li>
				<li class="btn">
					<Link to="/about">About</Link>
					{/* <a href="/about">About</a> */}
				</li>
				<li class="btn">
					<Link to="/contact">Contact</Link>
					{/* <a href="/contact">Contact</a> */}
				</li>
			</ul>
		</header>
	);
}

export default Header;
