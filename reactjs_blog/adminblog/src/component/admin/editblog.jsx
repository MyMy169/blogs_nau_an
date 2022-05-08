import React from 'react';
import TextBlog from './textBlog';

function EditBlog() {
    return (
        <div className="row">
                <div className="col-12">
                    <div className="card-body">
                        <form action="" method="POST" encType="multipart/form-data">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Mã bài viết </label>
                                        <input type="text" className="form-control" name="MaBV" placeholder="Mã bài viết" readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Tên món ăn </label>
                                        <input type="text" className="form-control" name="MaBV" placeholder="Tên món ăn"  />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Mô tả </label>                    
                                        <TextBlog/>
                                    </div>
                                </div>
                            </div>
                            <div classname="row"></div>
                            <div classname="row">
                                <div classname="col-12">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect2">Loại bài viết</label>
                                        <select className="form-control" id="exampleFormControlSelect2">
                                            <option>Món tráng miệng</option>
                                            <option>Món Việt</option>
                                            <option>Món Ngọt</option>
                                            <option>Nước</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form></div>
                </div>
            </div>
        );
        
}

export default EditBlog;