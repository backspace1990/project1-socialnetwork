import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator,updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>);
    let newMessageElement = React.createRef();/*onemli burasi link olusturduk*/
    let addMessage = ()=>{
        props.dispatch(addMessageActionCreator());
    };
    let onMessageChange=()=>{
        let text=newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value= {props.newMessageText} placeholder='Enter your message'></textarea>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Dialogs;