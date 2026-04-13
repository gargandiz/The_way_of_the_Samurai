import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post massage="Hi, how are you?" likeCount="40"/>
                <Post massage="What are you doing?" likeCount="50"/>
                <Post massage="How are you going?" likeCount="25"/>
            </div>
        </div>
    )
}

export default MyPosts;