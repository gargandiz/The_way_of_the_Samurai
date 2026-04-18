import React from "react";
// import s from "./../Navbar.module.css";

const FriendItem = (props) => {
    return (
        <div>
            <img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"/>
            {props.friend}

        </div>
    )
}

export default FriendItem;