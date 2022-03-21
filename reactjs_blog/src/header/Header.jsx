import "./header.css"
import banner from "./banner.jpg"
export default function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleBlog">Blog</span>              
            </div>
            <img className="headerImg" src={banner} alt="Banner"/>
        </div>
    );
}