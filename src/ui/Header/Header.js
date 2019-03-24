import React from 'react'

import NoticationPanel from '../NoticationPanel/NoticationPanel'

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            isNotificationShown: false
        }
    }

    onNotificationTabCLicked = () => {
        this.setState((prevStatwe) => {
            return {
                isNotificationShown: !prevStatwe.isNotificationShown 
            }
        })
    }

    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <div>
                        <h1>Loverz</h1>
                    </div>
                    <div className="spacer"/>
                    <div className="searchBox">
                        <i className="fas fa-search" ></i>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="spacer"/>
                    <div className="tabLayout">
                        <div className="tab">
                            <i className="fas fa-search"> Finder</i>
                        </div>
                        <div className="tab" onClick={this.onNotificationTabCLicked}>
                            <i className="far fa-bell"> Notification</i>
                            <NoticationPanel isShown={this.state.isNotificationShown}/>
                        </div>
                        <div className="tab">
                            <i className="far fa-user"> Profile</i>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

