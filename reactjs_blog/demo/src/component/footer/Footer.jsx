import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer class="footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="fs-left">
                            <div class="logo">
                                <Link to="/">
                                    <img src="img/footer-logo.png" alt=""/>
                                </Link>
                            </div>
                            <p>Nếu bạn là những người có niềm đam mê nấu ăn, hay muốn thưởng thức những món ăn ngon. Hãy đến 
                                với blog của chúng tôi, nó sẽ không làm bạn thất vọng.<br/>
                                Cảm ơn vì đã theo dõi chúng tôi.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1">
                        <form action="#" class="subscribe-form">
                            <h3>Theo dõi chúng tôi</h3>
                            <input type="email" placeholder="Your e-mail"/>
                            <button type="submit">Subscribe</button>
                        </form>
                        <div class="social-links">
                            <a href="#"><i class="fa fa-instagram"></i><span>Instagram</span></a>
                            <a href="#"><i class="fa fa-pinterest"></i><span>Pinterest</span></a>
                            <a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a>
                            <a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a>
                            <a href="#"><i class="fa fa-youtube"></i><span>Youtube</span></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-text">
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>   
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
