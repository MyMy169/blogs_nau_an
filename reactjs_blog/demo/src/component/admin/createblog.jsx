import React from 'react';

function CreatBlog() {
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8" style={{ marginLeft: '250px' }}>
                        <div className="card-body">
                            <form action="" method="POST" encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-md-5 pr-1">
                                        <div className="form-group">
                                            <label>Mã bài viết </label>
                                            <input type="text" className="form-control" name="MaBV" placeholder="Mã bài viết" readonly/>
                                        </div>
                                    </div>
                                    <div className="col-md-5 pr-1">
                                        <div className="form-group">
                                            <label>Tên món ăn</label>
                                            <input type="text" className="form-control" name="TenMA" placeholder="Tên món ăn" />
                                        </div>
                                    </div>
                                    <div className="col-md-5 pr-1">
                                        <div className="custom-file">
                                            <label htmlFor="exampleInputEmail1">Image</label>
                                            <input type="file" name="Image" id="ful" className="custom-file-input" />
                                        </div>
                                        <div className="form-group">
                                            <img id="imgPre" src="" alt="no img" className="img-thumbnail" />
                                            <p>
                                                <label htmlFor="ful"><i><u><b>Choose File</b></u></i></label>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-5 pr-1">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Mô tả</label>
                                            <input type="text" name="MoTa" className="form-control" placeholder="Mô tả" style={{ height: '300px'}}/>
                                        </div>
                                    </div>
                                </div>
                            </form></div>
                        <div className="clearfix" />
                        <button type="submit" style={{ marginLeft: '20px' }} className="btn btn-info btn-fill pull-right">Thêm</button>
                        <a href="" style={{ marginLeft: '10px' }} className="btn btn-secondary btn-fill pull-right">Hủy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatBlog;