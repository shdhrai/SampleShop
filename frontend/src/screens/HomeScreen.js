import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopSection from '../components/homeComponents/ShopSection';
import CalltoActionSection from '../components/homeComponents/CalltoActionSection';
import ContactInfo from '../components/homeComponents/ContactInfo';
import Categories from '../components/homeComponents/Categories'

export default function HomeScreen() {
  return (
    <div>
      <Header/>
      <Categories/>
      <ShopSection/>
      <CalltoActionSection/>
      <ContactInfo/>
      <Footer/>
    </div>
  )
}
