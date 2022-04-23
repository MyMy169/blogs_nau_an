import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
export default function TopFood() {
    return (
        <section class="top-recipe spad">
            <div class="section-title">
                <h5>Top Recipes this Week</h5>
            </div>
            <div class="container po-relative">
                {/* <div class="plus-icon">
                    <i class="fa fa-plus"></i>
                </div> */}
                <div class="row">
                    <div class="col-lg-6">
                        <div class="top-recipe-item large-item">
                            <Link to="/cach_nau/blogs">
                                <div class="top-recipe-img set-bg"  style={{ backgroundImage: "url('img/recipe-2.jpg')" }}>
                                    <i class="fa fa-plus"></i>
                                </div>
                            </Link>
                            <div class="top-recipe-text">
                                <div class="cat-name">Desert</div>
                                <Link to="/cach_nau/blogs">
                                    <h4>One Pot Weeknight Lasagna Soup Recipe</h4>
                                </Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="top-recipe-item">
                            <div class="row">
                                <div class="col-sm-4">
                                    <Link to="/cach_nau/blogs">
                                        <div class="top-recipe-img set-bg"  style={{ backgroundImage: "url('img/recipe-2.jpg')" }}>
                                            <i class="fa fa-plus"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-sm-8">
                                    <div class="top-recipe-text">
                                        <div class="cat-name">Vegan</div>
                                        <Link to="/cach_nau/blogs">
                                            <h4>One Pot Weeknight Lasagna Soup Recipe</h4>
                                        </Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="top-recipe-item">
                            <div class="row">
                                <div class="col-sm-4">
                                    <Link to="/cach_nau/blogs">
                                        <div class="top-recipe-img set-bg"  style={{ backgroundImage: "url('img/recipe-2.jpg')" }}>
                                            <i class="fa fa-plus"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-sm-8">
                                    <div class="top-recipe-text">
                                        <div class="cat-name">Meat lover</div>
                                        <Link to="/cach_nau/blogs">
                                            <h4>Veggie soup with Mushrooms</h4>
                                        </Link>
                                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="top-recipe-item">
                            <div class="row">
                                <div class="col-sm-4">
                                    <Link to="/cach_nau/blogs">
                                        <div class="top-recipe-img set-bg"  style={{ backgroundImage: "url('img/recipe-2.jpg')" }}>
                                            <i class="fa fa-plus"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-sm-8">
                                    <div class="top-recipe-text">
                                        <div class="cat-name">Desert</div>
                                        <Link to="/cach_nau/blogs">
                                            <h4>Caramel Ice Cream with Berries</h4>
                                        </Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="top-recipe-item">
                            <div class="row">
                                <div class="col-sm-4">
                                    <Link to="/cach_nau/blogs">
                                        <div class="top-recipe-img set-bg"  style={{ backgroundImage: "url('img/recipe-2.jpg')" }}>
                                            <i class="fa fa-plus"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-sm-8">
                                    <div class="top-recipe-text">
                                        <div class="cat-name">Desert</div>
                                        <Link to="/cach_nau/blogs">
                                            <h4>Freash Octopuse with lime juice</h4>
                                        </Link>
                                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
