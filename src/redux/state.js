import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: '12'},
                {id: 2, message: 'It\'s my first post.', likesCount: '30'},
                {id: 1, message: 'Blabla?', likesCount: '35'},
                {id: 2, message: 'Da da!!', likesCount: '67'}
            ],
            newPostText: '',
        },
        dialogsPage: {
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

        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log('state was changed');
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer // publisher-subscriber //наблюдатель//addEventListener // degisim gozetleyicisi
    },
    dispatch(action){ //{type:'ADD-POST'}
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state)
    }

}

export default store;
window.store=store;