import { createContext } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
	const sayHello = () => {
		console.log('Hello');
	};
	return (
		<CountryContext.Provider value={{ sayHello }}>
			{children}
		</CountryContext.Provider>
	);
};

export default CountryContext;
