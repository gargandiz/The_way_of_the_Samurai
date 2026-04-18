import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    const path = "/dialogs/" + props.id;
    return <div className={`${s.dialog} ${s.active}`}>
        <img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"/>
        <NavLink to={path}
                 className={({isActive}) => isActive ? s.activeLink : ""}> {props.name} </NavLink>
    </div>
}

export default DialogsItem;