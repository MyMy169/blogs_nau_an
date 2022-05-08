
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Admin from './component/admin/admin';
import CreatBlog from './component/admin/createblog';
import EditBlog from './component/admin/editblog';
import Login from './component/login/login';

class App extends Component {
  render() {
    return(
    <div>
      <BrowserRouter basename='/'>
      <Login/>
        <Routes>
                 {/* <Route exact path='/admin/create' element={<CreatBlog/>}></Route> */}
                 <Route exact path='/admin/edit' element={<EditBlog/>}></Route>
                 <Route exact path='/admin' element={<Admin/>}></Route>
          </Routes>
    </BrowserRouter>
    </div>
    
    );
  }
}

export default App;
