import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://i.ytimg.com/vi/V3V33QRm7zk/maxresdefault.jpg" alt=""/>
        </div>
        <div>ava+description</div>
        <div>New posts</div>
        <div className={s.posts}>
            <div className={s.item}>Post 1</div>
            <div className={s.item}>Post 2</div>
            <div className={s.item}>Post 3</div>
            <div className={s.item}>Post 4</div>
        </div>
    </div>
}

export default Profile;