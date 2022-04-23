export default function Blog() {
    return (
        <section class="single-page-recipe spad">
            <div class="recipe-top">
                <div class="container-fluid">
                    <div class="recipe-title">
                        <h2>Bún Bò Huế <br /></h2>
                        <ul class="tags">
                            <li>Desert</li>
                            <li>Asian</li>
                            <li>Spicy</li>
                        </ul>
                    </div>
                    <img src="../img/bunbohue.jpg" alt="" />
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="ingredients-item">
                            <div class="intro-item">
                                <img src="../img/bunbohue.jpg" alt="" />
                                <h2>Bún Bò Huế</h2>
                                <div class="recipe-time">
                                    <ul>
                                        <li>Thời gian chuẩn bị: <span>30 phút</span></li>
                                        <li>Thời gian nấu ăn: <span>2 tiếng</span></li>
                                        <li>Năng suất: <span>5</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ingredient-list">
                                <div class="recipe-btn">
                                    <a href="#">Công thức</a>
                                    <a href="#" class="black-btn">Pin Recipe</a>
                                </div>
                                <div class="list-item">
                                    <h5>Thành phần</h5>
                                    <div class="salad-list">
                                        <h6>món ăn</h6>
                                        <ul>
                                            <li>Xương Ống heo 2 kí</li>
                                            <li>Bò bắp 700g</li>
                                            <li>Bún bò cọng lớn 3 kí</li>
                                            <li>Bắp giò heo ( nên chọn giò trước) 700g</li>
                                            <li>Sả băm, tỏi, ớt xay mỗi loại 100g</li>
                                            <li>Mắm ruốc Huế ( Bà Duệ ) 1 hủ nhỏ</li>
                                            <li>Rau muống cọng, Hành tây 200g, Thơm chín 1 trái</li>
                                            <li>Sả cây khoảng 10 cây, Hành tím/ đầu hành lá + ngò rí xay 200g</li>
                                            <li>Ớt hiểm xanh 100g, Gừng 100g, Chả lá Huế 20 cái</li>
                                        </ul>
                                    </div>
                                    {/* <div class="dressing-list">
                                        <h6>For the dressing</h6>
                                        <ul>
                                            <li>1 brick of frozen udon</li>
                                            <li>1/2 cup kimchi, plus a bit of kimchi juice</li>
                                            <li>1 tablespoon of butter</li>
                                            <li>1 sac of mentaiko</li>
                                            <li>sliced green onions and nori, to finish</li>
                                            <li>1 tablespoon of butter</li>
                                            <li>1 sac of mentaiko</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div class="nutrition-fact">
                            <div class="nutri-title">
                                <h6>Nutrition Facts</h6>
                                <span>Serves 4</span>
                            </div>
                            <ul>
                                <li>Total Fat : 20.4g</li>
                                <li>Cholesterol : 2%</li>
                                <li>Chalories: 345</li>
                            </ul>
                        </div> */}
                    </div>
                    <div class="col-lg-7">
                        <div class="recipe-right">
                            <div class="recipe-desc">
                                <h3>Sự miêu tả</h3>
                                <p>Món bún bò Huế là một trong những món ăn đặc trưng của người miền Trung, sẽ thật tuyệt 
                                    vời nếu bạn có thể tự tay làm những tô bún thơm ngon để cả nhà cùng thưởng thức vào dịp cuối tuần.</p>
                                <p>Nếu như bạn đang tìm một công thức chuẩn để học nấu bún bò Huế ngon thì đây sẽ là lựa chọn tốt nhất cho bạn. 
                                    Giờ thì bắt tay vào học nấu ăn gia đình thôi nào.</p>
                            </div>
                            <div class="instruction-list">
                                <h3>Cách chế biến</h3>
                                <ul>
                                    <li>
                                        <span>01. Sơ chế nguyên liệu:</span><br/>
                                         <p>- Xương ống heo rửa sạch, để ráo nước cho vào lò nướng với 2 cây sả cây đập dập, gừng tươi dập, hành tây, thơm, ớt đỏ trong vòng 30 phút.</p>
                                         <p>- Dùng chỉ hoặc lạt mỏng bó chặt bắp bò và bắp giò heo lại. Bạn nhớ bó thật chặt tay. Sau đó cho ít sả cây, hành tây vào nồi nước sôi, thả 
                                             bắp bò, bắp giò heo chần sơ qua trong nồi nước sôi, sau đó cho vào âu nước đá lạnh. Vớt ra để ráo.</p>
                                    </li>
                                    <li>
                                        <span>02. Nấu nước dùng</span><br/>
                                        - Cho các nguyên liệu gồm hành tây, gừng đập dập, thơm cắt khoanh, ớt xanh, sả cây vào nồi nước. Khi nước sôi thì cho bắp bò bò, 
                                        bắp giò heo, xương ống vào nấu chung.
                                    </li>
                                    <li>
                                        <span>03. Làm Ớt Sa Tế</span><br/>
                                        - Cắt sợi bắp chuối, rau muống cho vào âu nước đá lạnh có nặn sẵn chanh để bắp chuối, rau muống không bị đen.
                                        Pha loãng 3 muỗng mắm ruốc với nước dùng rồi cho vào nồi nước dùng . Nêm thêm một muỗng canh đường, 2 muỗng canh nước mắm, 1 muỗng canh muối lại cho vừa ăn.
                                    </li>
                                    <li>
                                        <span>04. Trình bày</span><br/>
                                        <p>- Cắt lát mỏng bắp bò, bắp giò heo. Cắt miếng chả lá huế hoặc để nguyên cây nếu thích.</p>
                                        <p>- Trụng sơ bún qua nước sôi, cho lượng bún vừa đủ dùng vào tô, xếp bắp bò, bắp giò heo, 
                                            chả lá vào tô. Chan nước dùng vào, trang trí thêm bắp chuối, rau muống, rau thơm.</p>
                                        <p>- Giờ thì bạn đã có tô bún bò Huế thơm ngon nóng hổi để chiêu đãi cả nhà rồi. 
                                            Cách nấu bún bò Huế cũng không khó lắm đúng không các bạn, chúc bạn thành công khi thực hiện món ăn này qua công thức học nấu ăn ở trên.</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="notes">
                                <h3>Ghi chú</h3>
                                <div class="notes-item">
                                    <span>i</span>
                                    <p>Buổi sáng mát mẻ hay se lạnh làm một tô bún bò Huế thơm ngon đậm đà cùng cả nhà thì còn gì tuyệt vời bằng.
                                    Vị ngọt thơm của nước, béo ngậy của móng giò, giòn giòn mềm ngon của thịt nạm, chả cua thơm lừng cùng một chút cay của ớt và chua chua của chanh. 
                                    Chỉ nghĩ tới thôi đã cảm thấy mê man và thèm ngay một tô bún bò Huế.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
