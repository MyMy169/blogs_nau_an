import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
export default function OutstandingFood() {
    return (
        <section className="page-top-recipe">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-lg-2">
                        <Link to="/cach_nau/blogs">
                            <div className="pt-recipe-item large-item">
                                <div className="pt-recipe-img set-bg" style={{ backgroundImage: "url('img/bunrieucua.jpeg')" }}>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <div className="pt-recipe-text">
                                    <span>March 20, 2022</span>
                                    <h3>Bún riêu cua</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 order-lg-1">
                        <Link to="/cach_nau/blogs">
                            <div className="pt-recipe-item">
                                <div className="pt-recipe-img set-bg" style={{ backgroundImage: "url('img/recipe-1.jpg')" }}>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <div className="pt-recipe-text">
                                    <h4>Canh chua cá lóc</h4>
                                </div>
                            </div>
                        </Link>
                        <Link to="/cach_nau/blogs">
                            <div className="pt-recipe-item">
                                <div className="pt-recipe-img set-bg" style={{ backgroundImage: "url('img/recipe-2.jpg')" }}>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <div className="pt-recipe-text">
                                    <h4>Gà Ta Ủ Muối Hoa Tiêu</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 order-lg-3">
                        <Link to="/cach_nau/blogs">
                            <div className="pt-recipe-item">
                                <div className="pt-recipe-img set-bg" style={{ backgroundImage: "url('img/bokho.jpg')" }}>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <div className="pt-recipe-text">
                                    <h4>Bò kho</h4>
                                </div>
                            </div>
                        </Link>
                        <Link to="/cach_nau/blogs">
                            <div className="pt-recipe-item">
                                <div className="pt-recipe-img set-bg" style={{ backgroundImage: "url('img/phobo.jpg')" }}>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <div className="pt-recipe-text">
                                    <h4>Phở bò</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
