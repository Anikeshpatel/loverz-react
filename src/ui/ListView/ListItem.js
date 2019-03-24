import React, { Component } from 'react'


export default class ListItem extends React.Component {
    render() {
        return (
            <article className="listItem">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/29158894?s=460&v=4"/>
                    <h2>Anikesh Patel</h2>
                </header>
                <img className="postView" src="https://instagram.fbho1-1.fna.fbcdn.net/vp/c24f35fea4e6c38d05ed22f6e9971c25/5D2B187E/t51.2885-15/sh0.08/e35/s750x750/54447107_310762226239429_737854582018965058_n.jpg?_nc_ht=instagram.fbho1-1.fna.fbcdn.net"/>
                <div className="postActionsLayout">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="fas fa-share"></i>
                    <i className="far fa-bookmark"></i>
                </div>
                <div className="postLikeViewLayout">
                    <spam>999 Likes</spam>
                </div>
                <div className="postCaptionView">
                    <pre>
                        {`Love - Programming 🔡, Coding and Development💻
Pro - Android📱and Web 🌐 Development
Like - UI & UX Design 👨‍🎨, Motion Graphics, Photography 📷
                        `}
                    </pre>
                </div>
                <section className="quickCommentLayout">
                    <img src="https://avatars3.githubusercontent.com/u/29158894?s=460&v=4"/>
                    <input type="text" placeholder="Quick Comment"/>
                </section>
            </article>
        )
    }
}