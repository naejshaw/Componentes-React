import React from 'react';
import './Template.css';
import Site from "../../../Layouts/SiteLayout";
import ContactForm from '../../../Components/MyComponents/ContactForm';
import Header from '../../../Components/MyComponents/Header';
import Footer from '../../../Components/MyComponents/Footer';
import AboutUs from '../../../Components/MyComponents/AboutUs';
import ProductsServices from '../../../Components/MyComponents/ProductsServices';
import Testimonials from '../../../Components/MyComponents/Testimonials';
import data from '../../../utils/data.json'

export default function Template (){
    return(
        <Site>
        <div className="App">
          <Header company={data.name}/>
          <div className='App-main'>
            <AboutUs />
            <ProductsServices />
            <Testimonials />
            <ContactForm />
          </div>
          <div className='App-footer'>
            <Footer company={data.name}/>
          </div>
        </div>
        </Site>
    )
}