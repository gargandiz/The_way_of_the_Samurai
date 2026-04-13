import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    const DialogsItem = (props) => {
        const path = "/dialogs/" + props.id;
        return <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}
                     className={({isActive}) => isActive ? s.activeLink : ""}> {props.name} </NavLink>
        </div>
    }

    const Message = (props) => {
        return <div className={s.message}>
            {props.message}
        </div>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name="Viktor" id="1"/>
                <DialogsItem name="Anna" id="2"/>
                <DialogsItem name="Maxim" id="3"/>
                <DialogsItem name="Maria" id="4"/>
                <DialogsItem name="Valera" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="How are you?"/>
                <Message message="What's going on?!"/>
            </div>
        </div>
    )
}

export default Dialogs;