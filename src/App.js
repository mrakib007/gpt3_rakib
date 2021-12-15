import React from 'react';
import {footer,blog,possibility,features,whatgpt3,header} from './containers';
import {cta,brand,Navbar} from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar></Navbar>
                <header></header>
            </div>

            <brand></brand>
            <whatgpt3></whatgpt3>
            <features></features>
            <possibility></possibility>
            <cta></cta>
            <blog></blog>
            <footer></footer>
            
        </div>
    );
};

export default App;