
export default function Header(){
    return(
        <header class="header-section">
            <div className="container">
                <div className="logo">
                    <img src="img/logo.png" alt="Banner"/>
                </div>
                <div className="nav-menu">
                    <nav className="main-menu mobile-menu">
                        <ul>
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Món tráng miệng</a></li>
                            <li><a href="#">Món Việt</a></li>
                            <li><a href="#">Món ngọt</a></li>
                            <li><a href="#">Nước</a></li>
                            <li><a href="#">About me</a></li>
                        </ul>
                    </nav>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
        
    );
}

