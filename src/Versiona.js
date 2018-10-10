import React, { Component } from 'react';
import './index.css';

export default class Versiona extends Component {
        state = {
            valueLeft: '5.2',
            valueRight: '6.0',
        };

    handleChangeLeft(e) {
        this.setState({valueLeft: e.target.valueLeft});
    }
    handleChangeRight (e) {
        this.setState({valueRight: e.target.valueRight});
    }

    render() {
        return (
            <form>
                    <select value={this.state.valueLeft} onChange={this.handleChangeLeft} className="dropDownBtn">
                        <option value="2.0">2.0</option>
                        <option value="2.1">2.1</option>
                        <option value="2.2">2.2</option>
                        <option value="2.3">2.3</option>
                        <option value="2.4">2.4</option>
                        <option value="4.0">4.0</option>
                        <option value="4.1">4.1</option>
                        <option value="4.2">4.2</option>
                        <option value="4.3">4.3</option>
                        <option value="4.4">4.4</option>
                        <option value="5.0">5.0</option>
                        <option value="5.1">5.1</option>
                        <option value="5.2">5.2</option>
                        <option value="6.0">6.0</option>
                        <option value="7.0">7.0</option>
                        <option value="8.0">8.0</option>
                    </select>
                    <select value={this.state.valueRight} onChange={this.handleChangeRight} className="dropDownBtn">
                        <option value="2.0">2.0</option>
                        <option value="2.1">2.1</option>
                        <option value="2.2">2.2</option>
                        <option value="2.3">2.3</option>
                        <option value="2.4">2.4</option>
                        <option value="4.0">4.0</option>
                        <option value="4.1">4.1</option>
                        <option value="4.2">4.2</option>
                        <option value="4.3">4.3</option>
                        <option value="4.4">4.4</option>
                        <option value="5.0">5.0</option>
                        <option value="5.1">5.1</option>
                        <option value="5.2">5.2</option>
                        <option value="6.0">6.0</option>
                        <option value="7.0">7.0</option>
                        <option value="8.0">8.0</option>
                    </select>
            </form>
        );
    }
}