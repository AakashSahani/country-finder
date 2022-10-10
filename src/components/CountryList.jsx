import { useContext } from 'react';
import CountryContext from '../context/CountryContext';
function CountryList() {
	const { country, loading } = useContext(CountryContext);
	// console.log(country[0].capital);
	if (!loading) {
		console.log(country[0].capital);
		return <div>{country[0].capital}</div>;
	} else {
		return (
			<div>
				<p>hello</p>
			</div>
		);
	}
}

export default CountryList;
