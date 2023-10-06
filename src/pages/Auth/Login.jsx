import CostumInput from "./Input";
import lettreBox from './assets/letterBox.png'
import passwordIcon from './assets/passwordIcon.png'
import googlelogo from './assets/googlelogo.png'
import loginImg from './assets/loginImg.png'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import {base_url} from '../../utils/base_url'
import { useState } from "react";

let userSchema = Yup.object({
    userName: Yup.string().required('username is required'),
    password: Yup.string().required('password is required').min(4, 'Password must be at least 4 characters long'),
});


const LogIn = () => {
    
    const [loginSucc ,setLoginSucc] = useState('')
    const [errorLogin ,setErrorLogin] = useState('')
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:  {
          userName:'',
          password:''
        },
        validationSchema: userSchema,
        onSubmit: values => {
          axios.put(`${base_url}/api/auth/login/user`,values).then((res)=>{
            const junctionData = res.data
            localStorage.setItem('junctionData',JSON.stringify(junctionData))
            setLoginSucc(res?.data?.message)
            setTimeout(() => {
                // navigate('/login')
            }, 1500);
          }).catch((err)=>{
            setErrorLogin(err?.message  || 'An error occurred while logging in.')
          })
        }
      })
    
    return ( 
        <div className="flex h-[100dvh] items-center justify-between container mx-auto">
            <div className="w-[40%] text-center flex i flex-col gap-4">
                <h1 className=" text-4xl font-bold">Login to your Account</h1>
                <p className=" text-lg text-gray-500">Welcome back! Select method to log in:</p>
                <div className="inline-flex justify-center items-center">
                    <div className="w-[7.5rem] h-[2px] bg-gray-400" />
                    <div className="w-[13.3125rem] h-[1.5625rem] text-gray-400 text-center text-[.9375rem] font-medium leading-6">or continue with email</div>
                    <div className="w-[7.5rem] h-[2px] bg-gray-400" />
                </div>     
                <div className="text-green-500 text-[14px]">{loginSucc}</div>          
                <form 
                action='POST'  
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center justify-between gap-4">
                    <CostumInput
                    type={'text'}
                    img={lettreBox}
                    text={"User name"}
                    onChange={formik.handleChange('userName')}
                    value={formik.values.userName}
                    />
                    <div className='error'>
                        {formik.touched.userName && formik.errors.userName ? (
                        <div>{formik.errors.userName}</div>
                        ) : null}
                    </div>
                    <CostumInput
                    type={'password'}
                    img={passwordIcon}
                    text={"Password"}
                    onChange={formik.handleChange('password')}
                    value={formik.values.password}
                    />
                    <div className='error'>
                        {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <input type="checkbox"  />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <span className="text-sm text-gray-400 ">Forgot Password ?</span>
                    </div>
                    <div className="error">{errorLogin}</div>
                    <button className=" uppercase py-4 mt-4 bg-mainBlue w-full rounded-lg text-gray-100 font-semibold text-xl" type="submit">log in</button>
                </form>
                <p className=" text=sm text-gray-400 ">Don’t have account? 
                    <Link to="/signup">Create an account</Link> 
                </p>
                <div className="flex self-center items-center gap-2 border-[1px] w-fit py-2 px-8 border-gray-400 rounded-lg">
                    <img src={googlelogo} alt="" />
                    <h1 className="  text-gray-900 text-xl">Google</h1>
                </div>

            </div>
            <div className="w-[50%] ">
                <img src={loginImg} alt="" />
                <div className=" text-center text-mainBlue mt-4">
                    <h1 className=" capitalize font-bold text-lg">Log In to check your progress</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum?</p>
                </div>
            </div>
        </div>
     );
}

 
export default LogIn;