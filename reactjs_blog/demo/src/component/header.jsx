import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
class Header extends Component {

    state = {
        listCategories: []
    }

    async componentDidMount() {
        // axios.get("http://localhost:8080/posts")
        //      .then(res =>{
        //          console.log(res.data.data);
        //      })

        let res = await axios.get("http://localhost:8080/categories");
        this.setState({
            listCategories: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetailPost=(post)=>{
        console.log(post);
    }

    render() {
        let { listCategories } = this.state;
        return (
            <header class="header-section">
                <div className="container">
                    <div className="logo">
                        <img src="img/logo.png" alt="Banner" />
                    </div>
                    <div className="nav-menu" >
                        <nav className="main-menu mobile-menu">
                            <ul>
                                <li className="active"><Link to="/">Trang chủ</Link></li>
                                {/* <li><Link to="/trang_mieng">Món tráng miệng</Link></li>
                                <li><Link to="/mon_viet">Món Việt</Link></li>
                                <li><Link to="/mon_ngot">Món ngọt</Link></li>
                                <li><Link to="/nuoc">Nước</Link></li> */}

                                {listCategories && listCategories.length > 0 &&
                                    listCategories.map((item) => {
                                        return (
                                            <li key={item.categoryId} onClick={()=>this.handleViewDetailPost(item)}>{item.categoryName}</li>
                                        )
                                    })
                                }
                                <li><Link to="/about">Giới thiệu</Link></li>
                                <li><Link to="/contact">Liên hệ</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </header>

        );
    }
}
export default Header;



