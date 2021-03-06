import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} like={post.likesCount}/>
    );
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={classes.postBlock} >
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='Enter your post'/>
                </div>
                <div>
                    <button onClick={onAddPost} className={classes.profileaddbutton}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;