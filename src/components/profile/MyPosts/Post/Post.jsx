import React from 'react';
import classes from './Post.module.css';

const Post =(props)=>{


    return(
        <div>
            <div className={classes.item}>
                <img src='https://i.pinimg.com/600x315/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg'/>
                {props.message}
                <div>
                    <span>like : {props.like}</span>
                </div>
            </div>

        </div>
    )
};
export default Post;