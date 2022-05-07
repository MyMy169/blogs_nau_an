import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header className="header-section">
            <div className="container">
                <div className="logo">
                    <img src="img/logo.png" alt="Banner"/>
                </div>
                <div className="nav-menu">
                    <nav className="main-menu mobile-menu">
                        <ul>
                            <li className="active"><Link to="/">Trang chủ</Link></li>
                            <li><Link to="/trang_mieng">Món tráng miệng</Link></li>
                            <li><Link to="/mon_viet">Món Việt</Link></li>
                            <li><Link to="/mon_ngot">Món ngọt</Link></li>
                            <li><Link to="/nuoc">Nước</Link></li>
                            <li><Link to="/about">Giới thiệu</Link></li>
                            <li><Link to="/contact">Liên hệ</Link></li>
                            {/* <li><Link to="/login">Login</Link></li> */}
                        </ul>
                    </nav>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
        
    );
}

