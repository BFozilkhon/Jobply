import React from 'react';
import { Navbar } from '../Components/Navbar';
import { About } from '../Components/About';
import { Offer } from '../Components/Offer';
import { Category } from '../Components/Category';
import { Subs } from '../Components/Subscription';
import { Footer } from '../Components/Footer';

export const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Offer />
      <Category />
      <Subs />
      <Footer />
    </div>
  );
};
