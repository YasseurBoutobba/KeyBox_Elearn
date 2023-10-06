import CostumInput from "./Input";
import lettreBox from './assets/letterBox.png'
import passwordIcon from './assets/passwordIcon.png'
import googlelogo from './assets/googlelogo.png'
import loginImg from './assets/loginImg.png'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import profileImg from "./assets/person.png"
import {base_url} from '../../utils/base_url'
import { useState } from "react";
import axios from 'axios'
import CostumRadio from "./radio";


let userSchema = Yup.object({
    userName: Yup.string().required('username is required'),
    password: Yup.string().required('password is required').min(4, 'Password must be at least 4 characters long'),
    email:Yup.string().required('email is required'),
    mobile:Yup.string().required('mobile is required'),
    accountType:Yup.string().required('account type is required')
});

const SignUp = () => {

    const [errorLogin ,setErrorLogin] = useState('')
    const [createdSucc ,setCreatedSucc] = useState('')
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:  {
          userName:'',
          password:'',
          email:"",
          mobile:"",
          accountType:""
        },
        validationSchema: userSchema,
        onSubmit: values => {
          axios.post(`${base_url}/api/auth/register/user`,values).then((res)=>{
            setCreatedSucc(res?.data?.message)
            setTimeout(() => {
                navigate('/login')
            }, 1500);
          }).catch((err)=>{
            setErrorLogin(err?.message)
          })
        }
      })
    
    return ( 
        <div className="flex min-h-[100dvh] items-center justify-between container mx-auto">
            <div className="w-[40%] text-start flex i flex-col gap-2">
                <h1 className=" text-4xl font-bold">Create your Account</h1>
                <p className=" text-lg text-gray-500">Unlock all features!</p>
                            
                <form 
                className="flex flex-col justify-between gap-2"
                action='POST'  
                onSubmit={formik.handleSubmit}
                >
                    <div className="text-green-500 text-[14px]">{createdSucc}</div>
                    <CostumInput 
                    type={'text'} 
                    onChange={formik.handleChange('userName')} 
                    value={formik.values.userName} 
                    img={profileImg} 
                    text={'userName'} />
                    <div className='error'>
                        {formik.touched.userName && formik.errors.userName ? (
                        <div>{formik.errors.userName}</div>
                        ) : null}
                    </div>
                    <CostumInput 
                    type={'email'} 
                    onChange={formik.handleChange('email')} 
                    img={lettreBox} 
                    text={"email"}/>
                    <div className='error'>
                        {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <CostumInput 
                    type={'password'} 
                    onChange={formik.handleChange('password')} 
                    img={passwordIcon} 
                    text={"Password"}/>
                    <div className='error'>
                        {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <CostumInput 
                    type={'number'} 
                    onChange={formik.handleChange('mobile')} 
                    img={passwordIcon} 
                    text={"mobile"}/>
                    <div className='error'>
                        {formik.touched.mobile && formik.errors.mobile ? (
                        <div>{formik.errors.mobile}</div>
                        ) : null}
                    </div>
                    
                    <CostumRadio 
                    onChange={formik.handleChange('accountType')} 
                    />
                    <div className='error'>
                        {formik.touched.accountType && formik.errors.accountType ? (
                        <div>{formik.errors.accountType}</div>
                        ) : null}
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <input type="checkbox"  />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                    </div>
                    <div className="error">{errorLogin}</div>
                    <button className=" uppercase py-2 mt-4 bg-mainBlue w-full rounded-lg text-gray-100 font-semibold text-xl" type="submit">log in</button>
                </form>
                <p className=" text=sm text-gray-400 ">Already have an account? 
                    <Link to="/login"> Login</Link> 
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

 
export default SignUp;