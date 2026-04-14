import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: "1", message: "Hi, how are you?", likeCount: "40"},
        {id: "2", message: "What are you doing?", likeCount: "50"},
        {id: "3", message: "How are you going?", likeCount: "25"},
        {id: "4", message: "It\'s is cool", likeCount: "12"}
    ]

    let postsElements = posts
        .map((p) => {
            return (
                <Post message={p.message} likeCount={p.likeCount}/>
            )
        })


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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;