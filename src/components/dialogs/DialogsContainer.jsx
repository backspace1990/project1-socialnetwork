import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <Dialogs updateNewMessageTextAction={onMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    );

};

export default DialogsContainer;