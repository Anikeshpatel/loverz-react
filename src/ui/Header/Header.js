import React from 'react'

export default class Header extends React.Component {
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
                            <i>Finder</i>
                        </div>
                        <div className="tab">
                            <i>Notification</i>
                        </div>
                        <div className="tab">
                            <i>Profile</i>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

