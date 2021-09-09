import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CryptocurrencyTracker from './CryptocurrencyTracker';
import topImage from './img1.png'
import bottomImage from './img2.jpg';
import './Home.css';

const Home = () => {
    return(
        <div>
        <div><Header/></div>
        <div><a href="https://finstreet.in/" target="_blank"><img src={topImage} className="image"/></a></div>
        <div><CryptocurrencyTracker/></div>
        <div><a href="https://ftx.com/" target="_blank"><img src={bottomImage} className="image"/></a></div>
        <div><Footer/></div>
        </div>
    );
}
export default Home;