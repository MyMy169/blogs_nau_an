import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
export default function FeaturedRepcipes() {
    return (
        <section class="feature-recipe">
            <div class="section-title">
                <h5>Featured Recipes</h5>
            </div>
            <div class="container po-relative">
                {/* <div class="plus-icon">
                    <i class="fa fa-plus"></i>
                </div> */}
                <div class="row">
                    <div class="col-lg-6">
                        <div class="fr-item">
                            <Link to="/cach_nau/blogs">
                                <div class="fr-item-img">
                                    <img src="img/feature-2.jpg" alt=""/>
                                </div>
                            </Link>
                            <div class="fr-item-text">
                                <h4>Sunday Brunch: Spaghetti and Eggs Recipe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="fr-item">
                            <Link to="/cach_nau/blogs">
                                <div class="fr-item-img">
                                    <img src="img/feature-2.jpg" alt=""/>
                                </div>
                            </Link>
                            <div class="fr-item-text">
                                <h4>Sunday Brunch: Spaghetti and Eggs Recipe</h4>
                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
