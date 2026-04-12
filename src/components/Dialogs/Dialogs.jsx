import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>Viktor</div>
                <div className={s.dialog}>Anna</div>
                <div className={s.dialog}>George</div>
                <div className={s.dialog}>Maria</div>
                <div className={s.dialog}>Alex</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>What's going on?</div>
            </div>
        </div>
    )
}

export default Dialogs;