import { useContext, useState } from 'react';
import CountryContext from '../context/CountryContext';

function CountrySearch() {
	const { text, setText, getCountry, setLoading } = useContext(CountryContext);
	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			console.log('Please enter something');
		} else {
			getCountry(text);
			setText('');
			setLoading(false);
		}
	};
	return (
		<div className="search">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="country"
					id="country"
					value={text}
					onChange={handleChange}
				/>
				<button type="submit" className="btn">
					Search
				</button>
			</form>
		</div>
	);
}

export default CountrySearch;
