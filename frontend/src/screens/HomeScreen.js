import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopSection from '../components/homeComponents/ShopSection';
import CalltoActionSection from '../components/homeComponents/CalltoActionSection';
import ContactInfo from '../components/homeComponents/ContactInfo';
import Categories from '../components/homeComponents/Categories';
import { useParams } from 'react-router';

export default function HomeScreen() {
  const params=useParams();
  const keyword=params.keyword;

  return (
    <div>
      <Header/>
      <Categories/>
      <ShopSection keyword={keyword} />
      <CalltoActionSection/>
      <ContactInfo/>
      <Footer/>
    </div>
  )
}
