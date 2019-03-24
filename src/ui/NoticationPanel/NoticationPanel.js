import React, { Component } from 'react'

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
                    <h1>Notification</h1>
                    </div>
                </div>
                )
        }else {
            return null
        }
    }
}
