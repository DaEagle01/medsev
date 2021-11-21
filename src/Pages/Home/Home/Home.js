import './Home.css'
import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;