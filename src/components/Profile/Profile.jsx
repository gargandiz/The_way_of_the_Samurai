import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let posts = [
    {id: "1", message: "Hi, how are you?", likeCount: "40"},
    {id: "2", message: "What are you doing?", likeCount: "50"},
    {id: "3", message: "How are you going?", likeCount: "25"},
    {id: "4", message: "It\'s is cool", likeCount: "12"}
]

const Profile = () => {
    return (
        < div>
            < ProfileInfo/>
            < MyPosts posts={posts} />
        < /div>
    )
}

export default Profile;