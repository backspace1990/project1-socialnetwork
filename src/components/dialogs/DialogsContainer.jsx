import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store)=>{
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };
                let onMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };
                return <Dialogs updateNewMessageTextAction={onMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={store.getState().dialogsPage}/>}
            }
        </StoreContext.Consumer>
    );

};

export default DialogsContainer;