import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/profile';
import About from './components/about';
import Interest from './components/interest';
import Socials from './components/social';
import './App.css';


function App() {
    return (
    <div className='main-container'>
        <div className='card-container'>
        <div className='card'>
        <Profile />
        <div className='card-text'>
        <About />
        <Interest />
        </div>
        <Socials />
        </div>
        </div>
        
    </div>
    )
}


ReactDOM.render(
  
    <App />,
  document.getElementById('root')
);



