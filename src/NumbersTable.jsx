import React, { Component } from 'react'
import "./NumbersTable.css"

export default class NumbersTable extends Component {

    render() {
        const arr = []
        for (let i=1; i<=this.props.limit; i++) {
            arr.push("i")
        }
        return (
            <div id="number">
                {arr.map((number, i) => {
                    if (i%2 === 0)return <div class="rectangles pair">{i+1}</div>;
                    return <div class="impair rectangles">{i+1}</div>
                })}
            </div>
        )
    }
}
