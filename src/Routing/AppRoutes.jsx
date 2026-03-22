import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Pages/Home'
import About from '../Components/Pages/About'
import Contacts from '../Components/Pages/Contacts'
import FAQ from '../Components/Pages/FAQ'
import Service from '../Components/Pages/Service'
import Tools from '../Components/Pages/Tools'
import MainLayout from '../Layouts/MainLayout'

function AppRoutes() {

  return (
    <>
    
        <Routes element={<MainLayout/>}>
         <Route element={<MainLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/faq' element={<FAQ/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/tools' element={<Tools/>}/>
        </Route>
        </Routes>
    </>
  )
}

export default AppRoutes
