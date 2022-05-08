import React , {Component} from 'react';
import InfoModal from './buttonAdd';
import InfoDelete from './buttonDelete';
import InfoModalEdit from './buttonEdit';

class BeginContent extends Component {
    render(){
        return (
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">Quản Lý Bài Viết</h1>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <InfoModal/>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%">
                                <thead>
                                    <tr>
                                        <th>Mã bài viết</th>
                                        <th>Tên món ăn</th>
                                        <th>Hình ảnh</th>
                                        <th>Mô tả</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ashton Cox</td>
                                        <td>Junior Technical Author</td>
                                        <td>San Francisco</td>
                                        <td>66</td>
                                        <td><form action="#">
                                            <InfoModalEdit/>
                                            <InfoDelete/>
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
}
export default BeginContent;