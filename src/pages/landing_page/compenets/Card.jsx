const Card = ( {img} = props) => {
    return ( 
        <div className=" flex flex-col gap-6 bg-secondaryBlue w-72 p-6 rounded-lg" data-aos="fade-up" data-aos-once="true">
            <div className=" flex items-center gap-6">
                <img src={img} alt="" />
                <div>
                    <h1 className=" font-medium">Ramzi Gameche</h1>
                    <span>Trainer</span>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className=" font-medium">Mobile Developement</h1>
                <p>Unlock the world of mobile app development with our comprehensive Mobile App Development Course. Whether you're a beginner looking to create your first app or an experienced developer .</p>
            </div>
            <div className=" flex justify-between text-sm">
                <span>3 Courses</span>
                <span>Reviw : 5 Stars</span>
            </div>
        </div>
     );
}
 
export default Card;