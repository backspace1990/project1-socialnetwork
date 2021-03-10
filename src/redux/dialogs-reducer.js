const SEND_MESSAGE='SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY'
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
    newMessageBody:"",
}
const dialogsReducer=(state=initialState,action)=>{
    switch (action.type){
        case SEND_MESSAGE: {
            let body=state.newMessageBody;
            return {
                ...state,
                newMessageBody : '',
                messagesData:[...state.messagesData,{id:7,message:body}]
            }
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody : action.body
            };
        }

        default:
            return state;
    }
};
export const sendMessageCreator =()=>({type:SEND_MESSAGE});
export const updateNewMessageBodyCreator=(body)=>
    ({type:UPDATE_NEW_MESSAGE_BODY,body:body});
export default dialogsReducer;