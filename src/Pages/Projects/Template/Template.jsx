import React from 'react';
import './Template.css';
import ContactForm from '../../../Components/MyComponents/ContactForm';
import Navbar from '../../../Components/MyComponents/Navbar';
import Footer from '../../../Components/MyComponents/Footer';
import AboutUs from '../../../Components/MyComponents/AboutUs';
import ProductsServices from '../../../Components/MyComponents/ProductsServices';
import Testimonials from '../../../Components/MyComponents/Testimonials';
import datas from '../../../utils/data.json'

export default function Template (){
  const data = datas
    return(
        <div className="Template">
          <Navbar company={data.name}/>
          <div className='Template-main'>
            <AboutUs />
            <ProductsServices />
            <Testimonials />
            <ContactForm />
          </div>
          <div className='Template-footer'>
            <Footer company={data.name}/>
          </div>
        </div>
    )
}