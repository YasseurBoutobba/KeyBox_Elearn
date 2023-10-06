import ramzi from './assets/ramzi.png'
import {AiOutlineEdit} from 'react-icons/ai'


export const User = () => {
  return (
    <div className="w-full  flex gap-12">
       <div className="bg-[#5CD2E6] flex  flex-col gap-5 rounded-[30px] py-16 items-center  min-w-[350px]">
            <div><img src={ramzi} className='w-20 h-20 rounded-[50%]'/></div>
            <div className='font-bold'>Ramzi Gamech </div>
            <div>Student </div>
            <div className='flex gap-4 items-center'>
                <div>ramzigamech@gmail.com </div>
                <AiOutlineEdit/>
            </div>
            <div className='bg-white px-3 w-[260px] text-center text-black py-2 rounded-xl'>Advanced robotic student</div>
            <div className='bg-white px-3 w-[260px] text-center text-black py-2 rounded-xl'>Ai developer</div>
       </div>
       <div className="bg-white rounded-[30px] flex-grow py-10 px-8 min-w-[300px]" >
            <div className='font-bold'>Teachers opinion</div>
            <div className='py-5'>
                <div className='flex gap-3 items-center'>
                    <img src={ramzi} className='w-5 h-5 rounded-[40%]' />
                    <div className='font-bold text-[14px]'>zakarya saoual</div>
                </div>
                <div className='text-[12px] py-2 mx-4 w-[400px]'>
                    Lorem ipsum dolor sit amet consectetur. In quisque commodo ipsum morbi fusce 
                </div>
            </div>
            <div className='py-5'>
                <div className='flex gap-3 items-center'>
                    <img src={ramzi} className='w-5 h-5 rounded-[40%]' />
                    <div className='font-bold text-[14px]'>tamer merad</div>
                </div>
                <div className='text-[12px] py-2 mx-4 w-[400px]'>
                    Lorem ipsum dolor sit amet consectetur. In quisque commodo ipsum morbi fusce 
                </div>
            </div>
            <div className='py-5'>
                <div className='flex gap-3 items-center'>
                    <img src={ramzi} className='w-5 h-5 rounded-[40%]' />
                    <div className='font-bold text-[14px]'>fadi sefih</div>
                </div>
                <div className='text-[12px] py-2 mx-4 w-[400px]'>
                    Lorem ipsum dolor sit amet consectetur. In quisque commodo ipsum morbi fusce 
                </div>
            </div>

       </div>
    </div>
  )
}
