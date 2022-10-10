import { useContext } from 'react';
import CountryContext from '../context/CountryContext';

function CountrySearch() {
	const { sayHello } = useContext(CountryContext);
	const handleClick = () => {
		console.log('I was clicked');
	};
	return (
		<div className="search">
			<form>
				<input type="text" name="country" id="country" />
			</form>
			<button type="submit" className="btn" onClick={sayHello}>
				Search
			</button>
		</div>
	);
}

export default CountrySearch;
