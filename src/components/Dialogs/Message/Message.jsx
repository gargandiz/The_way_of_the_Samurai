import React from "react";
import s from "./../Dialogs.module.css"

const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div className={s.message}>
            <div>
                {props.message}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>

    )
}

export default Message;