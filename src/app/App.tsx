import './app.scss';

import Header from '../components/header/Header';
import Main from '../pages/main/Main';
import Join from '../pages/join/Join';
import Gallery from '../pages/gallery/Gallery';
import Footer from '../components/footer/Footer';

function App() {
	return (
		<>
			<Header />
			<Main />
			<Join />
			<Gallery />
			<Footer />
		</>
	);
}

export default App;
