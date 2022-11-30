import './app.scss';

import Header from '../components/header/Header';
import Main from '../pages/main/Main';
import Join from '../pages/join/Join';
import Gallery from '../pages/gallery/Gallery';
import Features from '../pages/features/Features';
import Contact from '../pages/contact/Contact';
import Footer from '../components/footer/Footer';

function App() {
	return (
		<>
			<Header />
			<Main />
			<Join />
			<Gallery />
			<Features />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
