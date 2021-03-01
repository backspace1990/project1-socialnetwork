import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} like={post.likesCount}/>
    );
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type:'ADD-POST'});
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type:'UPDATE-NEW-POST-TEXT',newText:text};
        props.dispatch(action);


    }
    return (
        <div className={classes.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;