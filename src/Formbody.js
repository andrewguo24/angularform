import React, { Component } from 'react';
import Versiona from './Versiona';
import CheckBox from './CheckBox';
import Button3 from './Button3';
import Button2 from './Button2';
import './App.css';
import './index.css';

export default class Formbody extends Component {
    render() {
        return (
        <div className="formbody">
            <p className="formtitle">Select the options matching your project:</p>
            <p className="angver">Angular Version</p>
            <Versiona />
            <p className="appcomp">App Complecity</p>
            <Button3 />
            <p className="ngu">ngUpgrade</p>
            <CheckBox />
            <p className="pkgmanage">Package Manager</p>
            <Button2 />
            <button className="btnshow btnshowfont">Show me how to update!</button>
        </div>
    );
    }
}