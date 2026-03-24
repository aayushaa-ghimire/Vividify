import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import FAQ from '../Pages/FAQ'
import Service from '../Pages/Service'
import Tools from '../Pages/Tools'
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
