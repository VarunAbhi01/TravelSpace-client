import React from 'react'
import "./home.css";

import Nav from '../../Components/Nav/Nav'
import Header from '../../Components/Header/Header'
import Featured from '../../Components/Featured/Featured'
import PropertyList from '../../Components/propertyList/propertyList';
import HomiesList from '../../Components/homiesList/homiesList';
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homies Love</h1>
        <HomiesList/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home