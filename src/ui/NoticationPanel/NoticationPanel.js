import React, { Component } from 'react'

import NotificationItem from '../NotificationItem/NotificationItem'

export default class NoticationPanel extends Component {

    constructor() {
        super()
        this.state = {
            isShown: true
        }
    }

    render() {
        if (this.props.isShown) {
            return (
                <div className="NotifyPanel">
                    <div className="pointer"/>
                    <div className="pointerHelper"/>
                    <div className="body">
                        <NotificationItem type="like"/>
                        <NotificationItem type="comment"/>
                        <NotificationItem type="message"/>
                        <NotificationItem type="follow"/>
                        <NotificationItem type="request"/>
                        <NotificationItem type="comment"/>
                        <NotificationItem type="message"/>
                        <NotificationItem type="request"/>
                        <NotificationItem type="like"/>
                        <NotificationItem type="like"/>
                        <NotificationItem type="comment"/>
                        <NotificationItem type="follow"/>
                        <NotificationItem type="message"/>
                    </div>
                </div>
                )
        }else {
            return null
        }
    }
}


