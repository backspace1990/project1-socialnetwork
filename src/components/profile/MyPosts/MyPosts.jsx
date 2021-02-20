import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: '12'},
        {id: 2, message: 'It\'s my first post.', likesCount: '30'},
        {id: 1, message: 'Blabla?', likesCount: '35'},
        {id: 2, message: 'Da da!!', likesCount: '67'}
    ];
    let postsElements = posts.map(post => <Post message={post.message} like={post.likesCount}/>
    );
    {/*
                <Post message={postData[0].message} like={postData[0].likesCount}/>
                <Post message={postData[1].message} like={postData[1].likesCount}/>*/
    }
    {/*Onemli kisim*/
    }

    return (
        <div className={classes.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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