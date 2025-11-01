import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Shpere from '../../components/TextShpere/Sphere'
import ContactFixed from '../../components/Contact/ContactFixed'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <div 
          // className=' w-full sm:w-5/6 md:w-10/12 m-auto index-bg'
        >
            <NavBar />
            <About />
            <Experience />
            <Projects />
            <Shpere />
            <Contact />
            <ContactFixed />
        </div>
        {/* <Footer /> */}
    </>

  )
}

export default Home