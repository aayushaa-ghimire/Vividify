import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import FAQ from '../Pages/FAQ';
import Service from '../Pages/Service';
import Blogs from '../Pages/Blogs';
import MainLayout from '../Layouts/MainLayout';
import Projects from '../Pages/Projects';

function AppRoutes() {
  return (
    <>
      <Routes element={<MainLayout />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
