import { createContext, useState } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
	const [country, setCountry] = useState([]);
	const [loading, setLoading] = useState(true);
	const getCountry = async function (text) {
		setLoading();
		await fetch(`https://restcountries.com/v3.1/name/${text}`)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setCountry(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<CountryContext.Provider
			value={{ loading, setLoading, getCountry, country }}
		>
			{children}
		</CountryContext.Provider>
	);
};

export default CountryContext;
