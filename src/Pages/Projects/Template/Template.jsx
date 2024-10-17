import React from 'react';
import './Template.css';
import ContactForm from '../../../Components/MyComponents/ContactForm';
import Header from '../../../Components/MyComponents/Header';
import Footer from '../../../Components/MyComponents/Footer';
import AboutUs from '../../../Components/MyComponents/AboutUs';
import ProductsServices from '../../../Components/MyComponents/ProductsServices';
import Testimonials from '../../../Components/MyComponents/Testimonials';
import datas from '../../../utils/data.json';

export default function Template() {
    const { name } = datas; // Destructure to get company name directly

    return (
        <div className="Template">
            <Header company={name} />
            <main className='Template-main'>
                <AboutUs />
                <ProductsServices />
                <Testimonials />
                <ContactForm />
            </main>
            <footer className='Template-footer'>
                <Footer company={name} />
            </footer>
        </div>
    );
}