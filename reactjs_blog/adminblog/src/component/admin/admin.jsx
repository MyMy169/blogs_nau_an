import React from 'react';
import BeginContent from './begincontent';
import FooterAdmin from './footeradmin';
import LogoutModal from './logoutmodal';
import SideBar from './sidebar';
import TopBar from './topbar';

function Admin() {
    return (
        <div>
         <div id="wrapper">
             <SideBar></SideBar>
             <div id="content-wrapper" class="d-flex flex-column">
                 <div id="content">
                     <TopBar></TopBar>
                     <BeginContent></BeginContent> 
                 </div> 
                 <FooterAdmin></FooterAdmin>               
             </div>
         </div>
        <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" /></a>
         <LogoutModal></LogoutModal>
        </div>


    );
}

export default Admin;