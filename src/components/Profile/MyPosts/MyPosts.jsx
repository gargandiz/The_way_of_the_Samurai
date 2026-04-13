import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsDate = [
        {id: "1", message: "Hi, how are you?", likeCount: "40"},
        {id: "2", message: "What are you doing?", likeCount: "50"},
        {id: "3", message: "How are you going?", likeCount: "25"}
    ]

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
                <Post massage={postsDate[0].message} likeCount={postsDate[0].likeCount}/>
                <Post massage={postsDate[1].message} likeCount={postsDate[1].likeCount}/>
                <Post massage={postsDate[2].message} likeCount={postsDate[2].likeCount}/>
            </div>
        </div>
    )
}

export default MyPosts;