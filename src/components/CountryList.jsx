import { useContext } from 'react';
import CountryContext from '../context/CountryContext';
function CountryList() {
	const { text, country, loading } = useContext(CountryContext);

	if (!loading & (country.length > 0)) {
		console.log(country[0]);
		console.log(text);
		return (
			<div className="country">
				<img src={country[0].flags.svg} className="flag" alt="Flag" />
				<div className="title">
					<div className="text">
						<p>Country: {country[0].name.common}</p>
						<p>Official Name: {country[0].name.official}</p>
					</div>
				</div>
				<div className="main">
					<ul>
						<li className="coat">
							Coat Of Arms
							<img src={country[0].coatOfArms.svg} alt="Coat of Arms" />
						</li>
						<li>Capital: {country[0].capital}</li>
						<li>Region: {country[0].region}</li>
						<li>SubRegion: {country[0].subregion}</li>
						<li>Population: {country[0].population}</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
}

export default CountryList;
