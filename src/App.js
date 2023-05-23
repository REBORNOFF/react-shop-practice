import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import { ContextProvider } from './context';

function App() {
	return (
		<>
			<Header />
			<ContextProvider>
				<Main />
			</ContextProvider>
			<Footer />
		</>
	);
}

export default App;
