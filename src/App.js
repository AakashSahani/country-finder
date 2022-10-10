import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import { CountryProvider } from './context/CountryContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<CountryProvider>
			<Router>
				<div>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/*" element={<Notfound />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</CountryProvider>
	);
}
export default App;
