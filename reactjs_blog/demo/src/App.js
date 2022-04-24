import './App.css';
import About from './component/about';
import Contact from './component/contact';
import Home from './component/home';
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Footer from './component/footer/Footer';
import Header from './component/header';
import ListRepcipes from './component/repcipes/list';
import Blog from './component/repcipes/blog';
import Login from './component/login/login';
import Admin from './component/admin/admin';
import CreatBlog from './component/admin/createblog';
import EditBlog from './component/admin/editblog';

class App extends Component{
  render() {
    return (
       <Router>
           <div className="App">
           <Header/>
           <Routes>
                 <Route exact path='/' element={<Home/>}></Route>
                 <Route exact path='/trang_mieng' element={<ListRepcipes/>}></Route>
                 <Route exact path='/mon_viet' element={<ListRepcipes/>}></Route>
                 <Route exact path='/mon_ngot' element={<ListRepcipes/>}></Route>
                 <Route exact path='/nuoc' element={<ListRepcipes/>}></Route>
                 <Route exact path='/about' element={<About/>}></Route>
                 <Route exact path='/contact' element={<Contact/>}></Route>
                 <Route exact path='/cach_nau/blogs' element={<Blog/>}></Route>
                 <Route exact path='/login' element={<Login/>}></Route>
          </Routes>
          <Footer/>
          <Admin/>
          <CreatBlog></CreatBlog>
          <EditBlog></EditBlog>
          </div>
       </Router>
   );
  }
}
 
export default App;
