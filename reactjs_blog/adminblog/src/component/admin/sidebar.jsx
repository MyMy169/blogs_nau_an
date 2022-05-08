import React from 'react';
import {Link} from 'react-router-dom';

function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">M&H Admin <sup>2</sup></div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Tables */}
      <li className="nav-item active">
        <Link to="/ql-bai-viet" className="nav-link">
        <i className="fas fa-fw fa-table" />
          <span>Quản lý bài viết</span>
        </Link>

      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
    );
}

export default SideBar;