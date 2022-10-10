import { useContext } from 'react';
import CountryContext from '../context/CountryContext';
function CountryList() {
	const { country, loading } = useContext(CountryContext);

	if (!loading & (country.length > 0)) {
		// console.log(country);
		return (
			<div className="country">
				<img src="https://flagcdn.com/np.svg" className="flag" alt="Flag" />
				<div className="title">
					<div className="text">
						<p>Nepal</p>
						<p>Official Name: Federal Democratic Republic of Nepal</p>
						<p>Capital: {country[0].capital}</p>
					</div>
				</div>
				<div className="main">
					<ul>
						<li className="coat">
							Coat Of Arms
							<img
								src="https://mainfacts.com/media/images/coats_of_arms/np.png"
								alt="Coat of Arms"
							/>
						</li>
						<li>Region: Asia</li>
						<li>SubRegion: Southern Asia</li>
						<li>Population: 29136808</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<p>hello</p>
			</div>
		);
	}
}

export default CountryList;
