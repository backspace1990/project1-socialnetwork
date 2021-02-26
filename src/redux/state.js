let rendererEntireTree = () => {
    console.log('state was changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '12'},
            {id: 2, message: 'It\'s my first post.', likesCount: '30'},
            {id: 1, message: 'Blabla?', likesCount: '35'},
            {id: 2, message: 'Da da!!', likesCount: '67'}
        ],
        newPostText: 'it-kamasutra.com'
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
};
window.state = state;
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rendererEntireTree(state);
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rendererEntireTree(state)
};
export const addMessage = (addMessages) => {
    let newMessage = {
        id: 7,
        message: addMessages
    };
    state.dialogsPage.messagesData.push(newMessage);
    rendererEntireTree(state);
};
export const subscribe = (observer) => {
    rendererEntireTree = observer; //observer // publisher-subscriber //наблюдатель//addEventListener // degisim gozetleyicisi
}
export default state;

//store - OOP ogrenecegiz!!