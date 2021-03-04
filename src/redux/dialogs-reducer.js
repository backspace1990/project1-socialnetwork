const ADD_MESSAGE='ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT'
let initialState={
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
        {id: 7, name: 'Umit'},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ],
    newMessageText:'',
}
const dialogsReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};
export const sendMessageCreator =()=>({type:ADD_MESSAGE});
export const updateNewMessageBodyCreator=(text)=>
    ({type:UPDATE_NEW_MESSAGE_TEXT,newText:text});
export default dialogsReducer;