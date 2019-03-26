import React, { Component } from 'react'

import axios from 'axios'

import ListItem from './ListItem'


export default class ListView extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    populatePosts() {
        const items = []
        if (this.state.posts.length > 0) {
            for(let i=0; i < 2; i++) {
                console.log(this.state.posts[i]);
                items.push(<ListItem key={i} post={this.state.posts[i]}/>)
            }
        }
        return items
    }

    render() {
        return (
            <section className="listViewWarpper">
                <main className="listView">
                { this.populatePosts().map((item) => item) }
                </main>
            </section>
        )
    }
}