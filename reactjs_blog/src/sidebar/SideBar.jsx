import "./sidebar.css"
export default function SideBar(){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="images/avt.jpg" alt="Banner"/>
                <p>Hãy nấu những gì mà bạn có cảm hứng</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">THỂ LOẠI</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Món Á</li>
                    <li className="sidebarListItem">Món Âu</li>
                    <li className="sidebarListItem">Món Ăn Vặt</li>
                    <li className="sidebarListItem">Đồ Uống</li>
                    <li className="sidebarListItem">Món Chay</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow</span>
                <div className="sidebarFollow">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
            </div>

        </div>
    );
}