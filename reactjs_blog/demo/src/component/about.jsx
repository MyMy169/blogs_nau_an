import React from 'react';
 
function About () {
    return (
        <section class="about-me spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="about-left">
                            <img src="img/about-me.jpg" alt="" />
                            <div class="about-title">
                                <span>17/04/2022</span>
                                <h2>Nhóm 7, <br /> những con người đam mê ăn uống</h2>
                                <p>Chúng tôi yêu thích được đi, ăn thật nhiều những món ăn ngon và tìm cách làm ra chúng.
                                    Chúng tôi vốn là các lập trình viên. Còn bây giờ, tình cờ hoặc tự nguyện chìm đắm, tôi lại là một food blogger
                                    phát điên vì đồ ăn. Thế giới Yummy Food Blog này là một góc nhỏ xíu tôi muốn chia sẻ tình yêu nấu ăn, chia sẻ hành trình mày
                                    mò nấu nướng, tìm hiểu ẩm thực của tôi với các bạn…</p>
                                <p>Một trong những giá trị lớn nhất mà mình nhận ra từ những khoảng thời gian trong bếp là nấu ăn có sức mạnh hàn gắn
                                    và yêu thương vô cùng kì diệu. Mỗi khi buồn, mệt, chán nản hay mất phương hướng, nơi mình tìm đến đều là bếp. Một mẻ
                                    bánh giòn tan thơm phức với mình là liều thuốc hữu hiệu nhất để xoa dịu tất cả các cảm giác tiêu cực kia. Và không
                                    chỉ với bản thân mình, mà nấu ăn còn là cách rất tốt. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-right">
                            <div class="sidebar">
                                <div class="sidebar-item">
                                    { <img src="img/aboutus/my.jpg" alt=""/> }
                                    <h6>Đặng Thị Tiểu My</h6>
                                </div>
                                <div class="sidebar-item">
                                    { <img src="img/aboutus/huong.jpg" alt=""/> }
                                    <h6>Vũ Thị Hải Hương</h6>
                                </div>
                                <div class="sidebar-item">
                                    { <img src="img/aboutus/chuyen.jpg" alt=""/> }
                                    <h6>Bùi Thị Cẩm Huyền</h6>
                                </div>
                                <div class="sidebar-item">
                                    { <img src="img/aboutus/hong.jpg" alt=""/> }
                                    <h6>Võ Thị Tuyết Hồng</h6>
                                </div>
                                <div class="sidebar-item">
                                    { <img src="img/aboutus/nhuyen.jpg" alt=""/> }
                                    <h6>Trần Lê Ngọc Huyền</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default About;