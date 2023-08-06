import { useState } from 'react'
import Header from './components/header'
import './App.css'
import Hero from './components/Hero'
import Services from './components/services'
import bg from "./assets/midbg.png"
import gallery from "./assets/gallery.png"
import gallerydog from "./assets/gallerydogs.png"
import Packages from './components/packages'
import Grooming from './components/grooming'
import Midsection from './components/Midsection'
import About from './components/about'
import dogs from "./assets/dogs.png"
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Footer from './components/footer'
import MobileAbout from './components/mobileAbout'

function App() {


  return (
    <div className="relative  w-screen    overflow-x-hidden h-screen">
        <div className='fixed w-full bg-white z-30'>
           <Header />
        
          </div>

          <div className='pt-16 w-full lg:block hidden'>
             <Hero />
             <Services />
             <div className='w-full pt-10 lg:block hidden'>
                <img 
                  src={bg}
                />
             </div>

             <Packages />
             <Grooming />
             <Midsection />
             <About />
             <div className='w-full'>
                <img
                    src={dogs}
                    className="w-full"
                />

             </div>
             <div>
                <Testimonials />
             </div>

             <div>
                <Contact />

             </div>
             <div>
                <Footer/>

             </div>

            

          </div>


          <div className=''>
              <MobileAbout />

              <div className='w-full py-4 px-4'>
                 <img
                    src={gallery}
                    className="w-full"
                />

             </div>
             <div className='w-full py-4 px-2'>
                 <img
                    src={gallerydog}
                    className="w-full"
              
                />

             </div>

             <Testimonials />

          </div>
     </div>
  )
}

export default App
