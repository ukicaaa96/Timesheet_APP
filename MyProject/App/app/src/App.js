import './App.css';
import React from 'react';
import Modal from 'react-modal'
import MainComponent from './components/MainComponent';
import QuoteComponent from './components/QuoteComponent';
import DateComponent from './components/DateComponent';
import ModalAction from './components/ModalAction';


Modal.setAppElement('#root');

function App() {

  return (
<>
	<div className="App">
        <div className="page-wrap">

			<header className="header">
        		<div className="wrap">			
					<ModalAction />	 
         			<QuoteComponent />
					<DateComponent />
				</div>
				
			</header>

			<main className="main">
				<div className="wrap">
					<MainComponent />
				</div>			
			</main>

    		<footer className="footer">
				<div className="wrap">
 					<span className="copy">&copy; github.com/ukicaaa96</span>
				</div>
    		</footer>

    	</div>
	</div>
</> 
  );
}


export default App;
