import React, { Component } from 'react'

import ListItem from './ListItem'


export default class ListView extends React.Component {

    generateFakeList() {
        const items = []
        for(let i=0; i<= 10; i++) {
            items.push(<ListItem key={i}/>)
        }
        return items
    }

    render() {
        return (
            <section className="listViewWarpper">
                <main className="listView">
                { this.generateFakeList().map((item) => item) }
                </main>
            </section>
        )
    }
}