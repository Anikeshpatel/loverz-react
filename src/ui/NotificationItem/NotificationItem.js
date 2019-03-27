import React from 'react'

const notificationItem = (props) => {
    let notificationItem = []
    switch (props.type) {
        case "like":
            notificationItem = (
                [
                    <img src="https://via.placeholder.com/600/92c952"></img>,
                    <p><spam>Username</spam> like your post</p>
                ]
            )
            break;
        case "comment":
            notificationItem = (
                [
                    <img src="https://via.placeholder.com/600/92c952"></img>,
                    <div>
                        <p><spam>Username</spam> comment on your post</p>
                        <p>Comment Msg</p>
                    </div>
                ]
            )
            break;
        case "message":
            notificationItem = (
                [
                    <img src="https://avatars3.githubusercontent.com/u/29158894?s=460&v=4"></img>,
                    <div>
                        <p><spam>Username</spam> send you message</p>
                        <p>Hi, Anikesh</p>
                    </div>,
                ]
            )
            break;
        case "follow":
            notificationItem = (
                [
                    <img src="https://avatars3.githubusercontent.com/u/29158894?s=460&v=4"></img>,
                    <p><spam>Username</spam> start following you</p>,
                    <a>Follow</a>
                ]
            )
            break;
        case "request":
            notificationItem = (
                [
                    <img src="https://avatars3.githubusercontent.com/u/29158894?s=460&v=4"></img>,
                    <p><spam>Username</spam> send you friend request</p>,
                    <div className="requestControll">
                        <a>Cancel</a>
                        <a>Accept</a>
                    </div>
                ]
            )
            break;
    
        default:
            break;
    }
    return ( 
        <section className = "notificationLayout" >
            {notificationItem.map((item) => item)}
        </section>
    )
}

export default notificationItem