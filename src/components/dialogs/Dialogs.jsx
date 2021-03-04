import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state =props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map(message => <Message message={message.message}/>);
    let newMessageBody=state.newMessageText;


    let onSendMessageClick = ()=>{
        props.sendMessage();
    };
    let onNewMessageChange=(e)=>{
        let body=e.target.value;
        props.updateNewMessageTextAction(body);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea value= {newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    <div>
                        <button onClick={onSendMessageClick}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Dialogs;