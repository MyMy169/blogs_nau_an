import "./header.css"
export default function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleBlog">Blog</span>              
            </div>
            <img className="headerImg" src="images/banner.jpg" alt="Banner"/>
        </div>
    );
}