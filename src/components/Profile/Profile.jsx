import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://i.ytimg.com/vi/V3V33QRm7zk/maxresdefault.jpg" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;