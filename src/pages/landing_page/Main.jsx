import Hero from "./compenets/Hero";
import Navbar from "./compenets/Navbar";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Courses from "./compenets/Courses";
import Partners from "./compenets/Partnership";
import AboutUs from "./compenets/Aboutus";
import Footer from "./compenets/Footer";
const LandingPage = () => {
    useEffect(() => {
        AOS.init({
          // Global AOS options, if needed
          duration: 800,
          easing: 'ease-in-out',
          once: true,
        });
      }, []);
    return ( 
        <div className=' bg-gradient-to-r from-[#D3F5FF] via-[#CBF4FF] to-[#FFF] backdrop-blur-[2px]'>
        <div className=" container mx-auto md:container sm:container lg:container ">
                <Navbar />
                <Hero />
                <Courses />
                <Partners />
                <AboutUs />
            </div>
            <div className=" bg-[#4D4D4D]">
                <Footer />
            </div>
        </div>
       

     );
}
 
export default LandingPage;