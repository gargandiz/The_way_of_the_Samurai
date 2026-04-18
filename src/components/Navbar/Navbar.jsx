import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBlock from "./FriendsBlock/FriendsBlock";

const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={({isActive})=> isActive ? s.activeLink : ""}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className={({isActive})=> isActive ? s.activeLink : ""}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={({isActive})=> isActive ? s.activeLink : ""}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={({isActive})=> isActive ? s.activeLink : ""}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className={({isActive})=> isActive ? s.activeLink : ""}>Settings</NavLink>
        </div>
        <FriendsBlock friends={props.state.friends}/>
    </nav>
}

export default Navbar;