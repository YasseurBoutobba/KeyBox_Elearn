import Card from "./Card";
import Ramzi from '../assets/ramzi.png'
import wave from '../assets/wave.png'
import circle from '../assets/circle.png'
const Courses = () => {
    return ( 
        <div id="courses" className=" py-[60px] relative">
            <div data-aos='fade-up' data-aos-once="true">
                <h1 className=" text-center font-bold text-4xl ">Courses We Offer</h1>
                <p className=" px-10 leading-7 font-medium text-xl my-8">Our trainers are industry experts dedicated to your success. With extensive experience and a passion for teaching, they provide personalized guidance, ensuring you master complex concepts with ease. Join our e-learn platform to learn from the best and achieve your learning goals efficiently.</p>
            </div>

            <div className=" py-[40px] flex items-center justify-around">
                <Card img={Ramzi}/>
                <Card img={Ramzi}/>
                <Card img={Ramzi}/>
            </div>
            <img className=" absolute bottom-10 right-[-60px] z-[-1] w-[60px]"  src={circle} alt="" />
            <img className=" absolute top-0 left-2 z-[-1] w-[60px]" src={circle} alt="" />
            <img className=" absolute top-20 right-0 z-[-1] w-[60px]" src={circle} alt="" />
            <p data-aos="fade-left" className=" text-right text-gray-600 underline">Explore More</p>
        </div>
     );
}
 
export default Courses;