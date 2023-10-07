import NewsCard from "./components/NewsCard";
import news1 from './assets/news1.png'
import news2 from './assets/news2.png'
import news3 from './assets/news3.png'
import CoursCard from "./components/CoursCard";


const CoursesPage = () => {
  return ( 
    <div>
      <h1 className=" text-3xl text-gray-900 font-bold">News</h1>
      <div className=" pt-20 pb-10 flex  justify-between ">
        <NewsCard img={news1} width={{width: '40%'}} pcontent={'Gain subject certification or earn money while teaching online with GlobalTalk.'} hcontent={'Learning and teaching online , made easy.'} />
        <NewsCard img={news2} width={{width: '28%'}} hcontent={'We made challenges'} />
        <NewsCard img={news3} width={{width: '28%'}} hcontent={'Our New mobile applcation'} />
      </div>
      <h1 className=" text-3xl text-gray-900 font-bold mb-4">Current Courses</h1>
      <div className=" py-10 flex flex-wrap gap-6">
        <CoursCard />
        <CoursCard />
      </div>
      <h1 className=" text-3xl capitalize text-gray-900 font-bold mb-4">exclusive Courses</h1>
      <div className=" py-10 flex flex-wrap gap-6">
        <CoursCard />
        <CoursCard />
      </div>


    </div>
   );
}
 
export default CoursesPage;
