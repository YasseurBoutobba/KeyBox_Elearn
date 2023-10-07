const NewsCard = ({width, img, pcontent, hcontent} = props) => {
    return ( 
        <div className=" bg-mainBlue rounded-md shadow-md px-6 pt-24 pb-6 text-gray-50 relative  flex flex-col justify-between " style={width}>
            <img className=" absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%]" src={img} alt="" />
            <h1 className=" font-DelaGothic text-2xl  mb-2">{hcontent}</h1>
            <p>{pcontent}</p>
            <span className=" block text-sm underline self-end ">Learn more</span>
        </div>
     );
}
 
export default NewsCard;