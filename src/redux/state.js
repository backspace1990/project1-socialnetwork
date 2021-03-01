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
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageText:''
            ,
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
                {id: 7, name: 'Umit'},
            ]
        }
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
        if(action.type==='ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }else if(action.type==='ADD-MESSAGE'){
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }  else if(action.type==='UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }


    }

}

export default store;
window.store=store;