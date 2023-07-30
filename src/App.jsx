import { useState } from 'react'
import Header from './components/header'
import './App.css'
import Hero from './components/Hero'
import Services from './components/services'
import bg from "./assets/midbg.png"
import Packages from './components/packages'
import Grooming from './components/grooming'
import Midsection from './components/Midsection'
import About from './components/about'
import dogs from "./assets/dogs.png"
import Testimonials from './components/testimonials'



function App() {


  return (
    <div className="relative  w-screen    overflow-x-hidden h-screen">
        <div className='fixed w-full bg-white z-30'>
           <Header />
        
          </div>

          <div className='py-16 w-full'>
             <Hero />
             <Services />
             <div className='w-full pt-10'>
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
            

          </div>
     </div>
  )
}

export default App
