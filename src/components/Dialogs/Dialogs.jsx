import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

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

const Dialogs = () => {

    let dialogs = [
        {id: "1", name: "Viktor"},
        {id: "2", name: "Anna"},
        {id: "3", name: "Maxim"},
        {id: "4", name: "Maria"},
        {id: "5", name: "Valera"}
    ]

    let messages = [
        {id: "1", message: "Hi!"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "What's going on?"}
    ]

    let dialogsElements = dialogs
        .map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElements = messages
        .map((m) => {
            return <Message message={m.message}/>
        })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;