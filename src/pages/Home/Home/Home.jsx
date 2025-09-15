import React from 'react';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import FeaturedProducts from '../FeatureProduct/FeatureProduct';
import TopCategories from '../TopCategories/TopCategories';
import About from '../About/About';
import Offer from '../Offer/Offer';
import Stats from '../Stats/Stats';
import BestSellerProducts from '../BestSeller/BestSeller';
import LatestNews from '../LatestNews/LatestNews';
import Testimonials from '../Testomonials/Testomonials';
import ContactInfo from '../ContactInfo/ContactInfo';
import Branding from '../Branding/Branding';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Card/>
            <FeaturedProducts></FeaturedProducts>
            <TopCategories></TopCategories>
            <About/>
            <Stats/>
            <Offer/>
            <BestSellerProducts></BestSellerProducts>
            <LatestNews></LatestNews>
            <Testimonials></Testimonials>
            <Branding></Branding>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;