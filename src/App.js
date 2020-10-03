import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
	const { t, i18n } = useTranslation();

	const handleClick = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<div className="App">
			<nav
				style={{ width: '100%', padding: '2rem 0', backgroundColor: 'grey' }}
			>
				<button onClick={() => handleClick('en')}>English</button>
				<button onClick={() => handleClick('ur')}>Urdu</button>
			</nav>

			<h1>{t('Welcome to React js')}</h1>
			<h1>
				{t('Thanks.1')} {t('Why.1')}
			</h1>
		</div>
	);
}

export default App;
