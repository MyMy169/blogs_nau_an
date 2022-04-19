export default function TopBar() {
    return (
        <header class="header-section-other">
            <div class="container-fluid">
                <div class="logo">
                    <img src="img/little-logo.png" alt=""/>
                </div>
                <div class="nav-menu">
                    <nav class="main-menu mobile-menu">
                        <ul>
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Món tráng miệng</a></li>
                            <li><a href="#">Món Việt</a></li>
                            <li><a href="#">Món ngọt</a></li>
                            <li><a href="#">Nước</a></li>
                            <li><a href="#">About me</a></li>
                        </ul>
                    </nav>
                    <div class="nav-right search-switch">
                        <i class="fa fa-search"></i>
                    </div>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
    );
}
