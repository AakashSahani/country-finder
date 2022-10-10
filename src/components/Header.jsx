import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<div className="logo">
				<Link to="/">
					<img src={require('../images/earth.jpg')} alt="Earth Logo" />
				</Link>
				{/* <a href="/">
				</a> */}
			</div>
			<ul className="nav">
				<li className="btn">
					<Link to="/">Home</Link>
					{/* <a href="/home">Home</a> */}
				</li>
				<li className="btn">
					<Link to="/about">About</Link>
					{/* <a href="/about">About</a> */}
				</li>
				<li className="btn">
					<Link to="/contact">Contact</Link>
					{/* <a href="/contact">Contact</a> */}
				</li>
			</ul>
		</header>
	);
}

export default Header;
