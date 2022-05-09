import React from 'react';
import '../../App.css';
import "./TopBarForAdmin.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router'

export default function Topbar() {

  let navigate = useNavigate();
    useEffect(() =>{
        const token = localStorage.getItem('token');
        axios.get('/admin',{
            headers: {
                Authorization: token,
            }
        }).then(res =>{
            console.log(res);
        }).catch(err =>{
            console.log(err);
            navigate('/log-in');
        })
    })
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
}
