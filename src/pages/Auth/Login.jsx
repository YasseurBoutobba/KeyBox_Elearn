import CostumInput from "./Input";
import lettreBox from './assets/letterBox.png'
import passwordIcon from './assets/passwordIcon.png'
import googlelogo from './assets/googlelogo.png'
import loginImg from './assets/loginImg.png'
import { Formik } from 'formik';
import {logInShechema} from './schemas/schemas'
const LogIn = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
      };
      
      
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
                <Formik initialValues={{ username: "", acceptedTos: false }}
                        validationSchema={logInShechema}
                        onSubmit={onSubmit}>
                    <form className="flex flex-col items-center justify-between gap-4">
                        <CostumInput type={'email'} img={lettreBox} text={"Email"}/>
                        <CostumInput type={'password'} img={passwordIcon} text={"Password"}/>
                        <div className="flex justify-between w-full">
                            <div className="flex gap-2">
                                <input type="checkbox"  />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <span className="text-sm text-gray-400 ">Forgot Password ?</span>
                        </div>
                        
                        <button className=" uppercase py-4 mt-4 bg-mainBlue w-full rounded-lg text-gray-100 font-semibold text-xl" type="submit">log in</button>
                    </form>
                </Formik>             
                
                <p className=" text=sm text-gray-400 ">Don’t have account? <a href="">Create an account</a> </p>
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