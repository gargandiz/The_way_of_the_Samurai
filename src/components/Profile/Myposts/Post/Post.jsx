import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>

    )
}

export default Post;