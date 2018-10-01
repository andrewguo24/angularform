import React, { Component } from 'react';
import { btnArray } from "./Constant2";
import './index.css';

export default class Button2 extends Component {
    state = {
        activeIndex: 0
    };
    handleClick = index => e => {
        this.setState ({ activeIndex: index });
    };

    render() {
        const { activeIndex } = this.state;
        return (
            <div className="btnmargin">
                {btnArray.map((btn, index) => {
                    return (
                        <button
                            key={ index }
                            className={ index === activeIndex ? "active" : "btn"}
                            onClick={this.handleClick(index)}>
                            {btn}
                        </button>
                    );
                })}
            </div>
        );
    }
}