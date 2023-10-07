import { useNavigate } from 'react-router-dom'
import ramzi from './assets/ramzi.png'
import {AiOutlineEdit} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {base_url} from '../../utils/base_url'

export const User = () => {

    const [opinions,setOpinions] = useState([])

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('junctionData'))

    useEffect(()=>{

        const getOpinions = async () => {
            const response = await axios.get(`${base_url}/api/auth/get/${user.id}`);
            setOpinions(response.data.opinion)
        };
        getOpinions();

        const getUserFromLocalStorage = localStorage.getItem('junctionData')
        if (getUserFromLocalStorage === undefined || getUserFromLocalStorage === null  ) {
            navigate('/login')
        }
    },[])

  return (
    <div className="w-full  flex gap-12 items-center">
       <div className="bg-gray-50 flex  flex-col gap-5 rounded-xl py-10 items-center shadow-lg min-w-[350px]">
            <div><img src={ramzi} className='w-20 h-20 rounded-[50%]'/></div>
            <div className='font-bold capitalize text-3xl '>{user?.userName} </div>
            <div> {user?.role} </div>
            <h1 className=' text-xl font-semibold capitalize' >Personal information</h1>
            <div className='flex gap-4 items-center'>
                <div> {user?.email} </div>
                <AiOutlineEdit/>
            </div>
            <div className='flex gap-4 items-center text-base font-medium'>
                <div> {user?.mobile} </div>
                <AiOutlineEdit/>
            </div>
            <h1 className=' text-xl font-semibold capitalize' >Courses Done</h1>
            <div className=' text-lg font-semibold'>
                <p>#Advanced robotic student</p>
                <p>#Ai developer</p>
            </div>
            
       </div>
       <div className="bg-white rounded-xl flex-grow py-10 px-8 shadow-lg min-w-[300px]" >
            <div className='font-bold'>Teachers opinion</div>
            {
                opinions && opinions.map((item,key)=>(
                    <div key={key} className='py-5'>
                        <div className='flex gap-3 items-center'>
                            <img src={`${item?.image}`} className='w-5 h-5 rounded-[40%]' />
                            <div className='font-bold text-[14px]'>{item?.writer?.userName}</div>
                        </div>
                        <div className='text-[12px] py-2 mx-4 w-[400px]'>
                            {item?.description}
                        </div>
                    </div>
                ))
            }
            <div className='py-5'>
                <div className='flex gap-3 items-center'>
                    <img src={ramzi} className='w-5 h-5 rounded-[40%]' />
                    <div className='font-bold text-[14px]'>zakarya saoual</div>
                </div>
                <div className='text-[12px] py-2 mx-4 w-[400px]'>
                    Lorem ipsum dolor sit amet consectetur. In quisque commodo ipsum morbi fusce 
                </div>
            </div><div className='py-5'>
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
                    <div className='font-bold text-[14px]'>zakarya saoual</div>
                </div>
                <div className='text-[12px] py-2 mx-4 w-[400px]'>
                    Lorem ipsum dolor sit amet consectetur. In quisque commodo ipsum morbi fusce 
                </div>
            </div>

       </div>
    </div>
  )
}
