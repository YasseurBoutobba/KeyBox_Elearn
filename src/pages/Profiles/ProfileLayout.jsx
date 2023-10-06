import { Outlet } from "react-router-dom";
import SideNavBar from "./SideNavbar";
import TopNavBar from "./TopNavbar";

const Profile = () => {
    return ( 
        <div className="w-screen h-screen relative flex">
            <div>
                <SideNavBar />
            </div>
            <div>
                <TopNavBar />
            </div>
            <div className="outlet-content">
                <div className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quis tempora corrupti dolore quam quae illum saepe, consectetur atque fugit praesentium, maiores, animi ad accusantium necessitatibus? Enim pariatur ratione deserunt rem molestiae eum? Rem laudantium vitae explicabo provident nesciunt ipsa harum, velit eaque illo eius quis nam suscipit minus dolores, inventore reprehenderit laborum eligendi dolore, architecto adipisci soluta illum? Commodi saepe adipisci error qui voluptatum veniam a, accusantium esse dolorum rem non amet necessitatibus, animi id quo, praesentium impedit atque maiores quidem nemo ut in! Fuga quidem aperiam modi adipisci optio ducimus rem libero maxime, asperiores rerum blanditiis laborum quo inventore repellat perspiciatis consectetur quibusdam nostrum. Repellendus illo repellat culpa obcaecati nobis reprehenderit laudantium! Tenetur accusantium aliquam quia nam porro ratione culpa consequuntur minima saepe asperiores. Unde dolores fuga, odit placeat voluptate quidem pariatur mollitia quisquam cum, non, error ut iure dolor sit repellat esse quasi sed maiores dolorum reiciendis. Adipisci tenetur est reprehenderit voluptatibus corrupti odio amet, quaerat fugit illum neque ipsum, natus illo unde ipsa voluptatem non dicta a exercitationem, et eum beatae eaque! Repellendus sapiente possimus rerum laborum enim dolores quam soluta debitis aliquam impedit corrupti adipisci quasi atque magnam vel quia voluptatem, saepe esse optio totam labore eaque beatae. Velit ratione ipsa quia, ab animi, facilis deserunt ut soluta natus dolor odit. Veniam neque, nostrum dolor molestias quis similique optio culpa maiores explicabo et fuga expedita necessitatibus ipsa dignissimos, nisi assumenda labore quaerat quod nam fugiat. Dolorum, incidunt! Eius quia nobis porro at, quidem corporis nesciunt et tempore est enim nostrum excepturi earum? Quasi aliquid facilis ea numquam nam nostrum nobis qui vero corrupti explicabo, rem itaque in ab pariatur voluptas voluptatum architecto. Officia, expedita distinctio laudantium esse blanditiis sit eius nulla enim voluptas doloremque, quod totam! Hic maxime dolor suscipit adipisci eveniet consectetur iusto nihil. Dolore ducimus minus similique aliquam. Quidem tempore repellat assumenda enim ullam, recusandae quod nemo? Ullam voluptates in nostrum dolore unde quasi impedit reiciendis minus dolor? Minima nulla rem quos id alias dolor, reprehenderit non incidunt odit, molestiae eos. Inventore tempore harum odio reprehenderit consequatur quod sit, modi natus ipsum, assumenda numquam veniam incidunt quam fugiat hic libero nihil excepturi aliquam maiores. Harum repellat, explicabo, officiis et similique amet minus cupiditate inventore exercitationem sit labore alias id corporis commodi blanditiis perferendis ipsum? Ex odit perferendis quidem suscipit dolorum ab mollitia, impedit, ipsam debitis, minus enim consectetur illum fugiat ipsa totam laboriosam nulla laudantium velit recusandae culpa esse? Error atque quis eum aliquid laboriosam eveniet mollitia eos vel iure neque optio tempora, dolorem quam, suscipit sint libero non esse sit magnam, dicta explicabo omnis. Blanditiis consequuntur vero aut quaerat commodi temporibus incidunt, illo dolorum quod optio repellat obcaecati hic ratione soluta dicta tempore? Consequatur, optio eum! Quasi repellendus nihil a neque perferendis voluptatem fugit quas quae, dolorem officia facilis asperiores reprehenderit beatae provident quidem ipsam voluptatibus ut voluptatum distinctio tempora excepturi. Pariatur voluptas possimus architecto laboriosam tenetur corporis deserunt quam praesentium molestias, tempora modi necessitatibus recusandae nisi quis. Pariatur quae dolorem inventore!
                    <Outlet/>
                </div>
            </div>
            
        </div>
     );
}
 
export default Profile;