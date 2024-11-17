"use client";

import React, { useState, useEffect } from "react";
import { navs } from "../data/data";
import "./nav.css";

export default function Nav () {
  const [navList, setNavList] = useState(navs);
  
  const handleScrolTo = (section: string) => {};

  return (
    <nav id="navbar" className="navbar nav-menu">
      <ul>
        {navList.map(nav => (
          <li>
            <a
            onClick={()=>handleScrolTo (nav.target)}
             className={`nav-link scrollto ${
                nav.active ? 'active' : undefined
            }`}
            >
              <i className={nav.icon}></i> <span>{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

