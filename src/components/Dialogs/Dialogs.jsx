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

    let dialogsDate = [
        {id: "1", name: "Viktor"},
        {id: "2", name: "Anna"},
        {id: "3", name: "Maxim"},
        {id: "4", name: "Maria"},
        {id: "5", name: "Valera"}
    ]

    let messagesDate = [
        {id: "1", message: "Hi!"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "What's going on?"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name={dialogsDate[0].name} id={dialogsDate[0].id}/>
                <DialogsItem name={dialogsDate[1].name} id={dialogsDate[1].id}/>
                <DialogsItem name={dialogsDate[2].name} id={dialogsDate[2].id}/>
                <DialogsItem name={dialogsDate[3].name} id={dialogsDate[3].id}/>
                <DialogsItem name={dialogsDate[4].name} id={dialogsDate[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesDate[0].message}/>
                <Message message={messagesDate[1].message}/>
                <Message message={messagesDate[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;