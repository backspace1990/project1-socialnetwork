import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo =()=>{
    return(
        <div>
            <div>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src='http://webmeup.com/upload/blog/lead-image-105.png'/>
                ava+description
            </div>
        </div>
    )
};
export default ProfileInfo;