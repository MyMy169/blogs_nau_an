import React from 'react';
import SideBar from './sidebar';

function BeginContent() {
    return (
        <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Quản Lý Bài Viết</h1>
            {/* DataTales Example */}
            <div className="btn-group" role="group" aria-label="Basic example">
                <a href="#" className="btn btn-success" style={{textAlign: 'left'}}>Thêm mới</a>
            </div>            
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%">
                            <thead>
                                <tr>
                                    <th>Mã bài viết</th>
                                    <th>Hình ảnh</th>
                                    <th>Mô tả</th>
                                    <th>Age</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Mã bài viết</th>
                                    <th>Hình ảnh</th>
                                    <th>Mô tả</th>
                                    <th>Age</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td><form action="#">
                                        <a href="#" style={{ fontSize: '7px' }} className="btn btn-info" title="Chỉnh sửa bài viết"><i className="fa fa-edit" /><span className="glyphicon glyphicon-edit" /> </a>
                                        <button type="submit" style={{ fontSize: '7px' }} onclick="return confirm('Bạn có chắc chắn muốn xóa?')" className="btn btn-danger" title="Xóa bài viết"><i className="fa fa-trash" /></button>
                                    </form></td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>63</td>
                                    <td><form action="#">
                                        <a href="#" style={{ fontSize: '7px' }} className="btn btn-info" title="Chỉnh sửa bài viết"><i className="fa fa-edit" /><span className="glyphicon glyphicon-edit" /> </a>
                                        <button type="submit" style={{ fontSize: '7px' }} onclick="return confirm('Bạn có chắc chắn muốn xóa?')" className="btn btn-danger" title="Xóa bài viết"><i className="fa fa-trash" /></button>
                                    </form></td>
                                </tr>
                                <tr>
                                    <td>Ashton Cox</td>
                                    <td>Junior Technical Author</td>
                                    <td>San Francisco</td>
                                    <td>66</td>
                                    <td><form action="#">
                                        <a href="#" style={{ fontSize: '7px' }} className="btn btn-info" title="Chỉnh sửa bài viết"><i className="fa fa-edit" /><span className="glyphicon glyphicon-edit" /> </a>
                                        <button type="submit" style={{ fontSize: '7px' }} onclick="return confirm('Bạn có chắc chắn muốn xóa?')" className="btn btn-danger" title="Xóa bài viết"><i className="fa fa-trash" /></button>
                                    </form></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeginContent;