import partnership from '../assets/partnership.png'
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import usthb from '../assets/usthb.png'
import stilioo from '../assets/stilioo.png'
import circle from '../assets/circle.png'
import abischool from '../assets/abischool.png'
const PartnerShip = () => {
    return ( 
        <div id='partners' className=' py-[60px] relative'>
            <h1 data-aos="fade-up" data-aos-once="true" className=' text-4xl text-center font-bold'>Partners</h1>
            <div className='flex items-center justify-between py-14'>
                <p data-aos="fade-right" className='w-[50%] text-xl leading-8'>We extend our heartfelt gratitude for your unwavering support and commitment to our e-learning platform. Your generous contributions have made it possible for us to provide quality education and resources to learners worldwide. Together, we are empowering individuals to achieve their dreams and aspirations through knowledge. Thank you for being our valued partners in this journey of learning and growth.</p>
                <img data-aos="fade-left" className=" rounded-lg" src={partnership} alt="" />
            </div>
            <div className=' flex items-center justify-evenly '>
                    <img data-aos="fade-right" data-aos-delay="0" className=' w-[80px]' src={abischool} alt="" />
                    <img data-aos="fade-right" data-aos-delay="100" className=' w-[80px]' src={stilioo} alt="" />
                    <img data-aos="fade-right" data-aos-delay="200" className=' w-[80px]' src={usthb} alt="" />
                    <img data-aos="fade-right" data-aos-delay="300" className=' w-[80px]' src={partner1} alt="" />
                    <img data-aos="fade-right" data-aos-delay="400" className=' w-[80px]' src={partner2} alt="" />
                    <img data-aos="fade-right" data-aos-delay="500" className=' w-[80px]' src={partner3} alt="" />
            </div>
            <img className=' absolute z-[-1] top-3 left-[-10%] w-[60px]' src={circle} alt="" />
            <img className=' absolute z-[-1] top-0 left-[30%] w-[60px]' src={circle} alt="" />
            <img className=' absolute z-[-1] bottom-3 right-1 w-[60px]' src={circle} alt="" />        </div>
     );
}
 
export default PartnerShip;