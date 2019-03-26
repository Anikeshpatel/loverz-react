import React, { Component } from 'react'


export default class ListItem extends React.Component {

    render() {
        return (
            <article className="listItem">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/29158894?s=460&v=4"/>
                    <h2>Anikesh Patel</h2>
                </header>
                <img className="postView" src={this.props.post.url}/>
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
                        {this.props.post.title}
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