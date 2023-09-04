import React, { useEffect, useState } from "react";

import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { SidebarData } from "./SidebarData";

import { NavLink } from "react-router-dom";

export default function Sidebar({children}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggle = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600 && isSidebarOpen){
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  return (<div className="sidebar-container">
    <div style={{width: isSidebarOpen ? "300px" : "50px"}}  className="sidebar">
      <div style={{width: isSidebarOpen ? "300px" : "50px", visibility: "hidden"}}  className="hidden"></div>
      <div style={{width: isSidebarOpen ? "300px" : "50px"}} className="sidebar-inner">
      <div style={{padding: isSidebarOpen ? "20px 15px" : "24.75px 15px 24.75px 12px"}} className="sidebar-top">
        <h1 style={{display: isSidebarOpen ? "block" : "none"}} className="logo">Logo</h1>
        <div className="bars">
          {
            isSidebarOpen ? <CgPushChevronLeft onClick={toggle}/> : <CgPushChevronRight onClick={toggle}/>
          }
        </div>
      </div>
      {
        SidebarData.map((item, index) => 
          (<NavLink to={item.path} key={index} className="link">
            <div className="link-icon">{item.icon}</div>
            <div style={{display: isSidebarOpen ? "block" : "none"}} className="link-text">{item.name}</div>
          </NavLink>)
        )
      }
    </div>
      </div>
      
    <main>
      {children}
    </main>
  </div>);
}
