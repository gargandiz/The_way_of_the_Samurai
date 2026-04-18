import React from "react";
import s from "../Navbar.module.css";
import FriendItem from "./FriendItem/FriendItem";

const FriendsBlock = (props) => {

    let friendItem = props.friends.map((f) => {
        return (
            <FriendItem friend={f.name}/>
        )
    })

    return (
        <div>
            <h4>FRIENDS</h4>
            <div className={s.friendsBlock}>
                {friendItem}
            </div>
        </div>
    )
}

export default FriendsBlock;