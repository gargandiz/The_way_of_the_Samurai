import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div className={s.profile}>
            <img src="https://i.ytimg.com/vi/V3V33QRm7zk/maxresdefault.jpg" alt=""/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;