import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import FormDialogs from './Message/FormDialogs';

const Dialogs = (props) => {

    let dialogData = props.state.dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageData = props.state.message.map(m => <Message message={m.message}/>)

    /*let addMessage = () => {
        props.addMessage()
    }

    let messageChange = () => {
        let text = newMessage.current.value
        props.newMessageText(text)
    }*/

    return (
        <div className={s.dialogs}>
            <div>{dialogData}</div>
            <div className={s.messages}>
                {messageData}
                <div className={s.newMessage}>
                    <FormDialogs addMessage={props.addMessage}  />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;