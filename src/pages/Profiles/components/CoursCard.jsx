import coursePic from '../assets/coursepic.png'
import profilepic from '../assets/profilepic1.png'
const CoursCard = () => {
    return ( 
        <div className=' relative flex flex-col w-[23%] rounded-lg bg-gray-300'>
            <img className=' w-full rounded-xl abs ' src={coursePic} alt="" />
           
            <div className=' relative p-4'>
                <div className=' absolute right-4 top-[-30px] p-1 border-[1px] border-gray-100 rounded-full'>
                    <img src={profilepic} alt="" />
                </div>
                <span className=' text-lg font-[500] text-mainBlue'>Tameur Merad</span>
                <h1 className=' font-semibold mb-4' >Mobile App Developer</h1>
                <span className=' text-sm text-gray-900'>60 Students</span>
            </div>
           
        </div>
     );
}
 
export default CoursCard;