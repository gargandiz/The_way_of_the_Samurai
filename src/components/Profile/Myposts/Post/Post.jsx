import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"/>
            {props.massage}
            <div>
                <span>
                    likes {props.likeCount}
                </span>
            </div>
        </div>
    )
}

export default Post;