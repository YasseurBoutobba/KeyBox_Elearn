import downloadAppImg from '../assets/downloadapp.png'
const DownloadApp = () => {
    const appLink = "https://drive.google.com/file/d/1MQkClPoxLHumRnCdEkYAY2PzAy7WO-ZP/view"
    return ( 
        <div id='partners' className=' py-[60px] relative'>
            <h1 data-aos="fade-up" data-aos-once="true" className=' text-4xl text-center font-bold'>Download Our App</h1>
            <div className='flex items-center justify-between py-14'>
                <div className=' w-[50%] flex flex-col items-start gap-8' data-aos="fade-right" >
                    <p  className=' text-xl leading-8'>Elevate your learning with our mobile app! Track your progress effortlessly and take control of your educational journey. Download now and unlock a world of learning at your fingertips. Join us and succeed in your studies.</p>
                    <a target='_blank' href={appLink} className=' py-2 px-6 text-xl text-gray-100 bg-mainBlue rounded-xl uppercase font-semibold'>Download</a>

                </div>
                <img  data-aos="fade-up" data-aos-duration="1600" className=" w-[50%]" src={downloadAppImg} alt="" />
            </div>
        </div>
     );
}
 
export default DownloadApp;