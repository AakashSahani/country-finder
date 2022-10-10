import CountrySearch from '../components/CountrySearch';
import CountryList from '../components/CountryList';

function Home() {
	return (
		<main>
			<h1>Welcome To Country Finder</h1>
			<CountrySearch />
			<CountryList />
		</main>
	);
}

export default Home;
