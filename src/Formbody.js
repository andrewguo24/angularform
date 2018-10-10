import React, { Component } from 'react';
import Versiona from './Versiona';
import CheckBox from './CheckBox';
import Button3 from './Button3';
import Button2 from './Button2';
import './index.css';

export default class Formbody extends Component {
    render() {
        return (
        <div className="formBody">
            <p className="formTitle">Select the options matching your project:</p>
            <p className="angVer">Angular Version</p>
            <Versiona />
            <p className="appComp">App Complecity</p>
            <Button3 />
            <p className="ngu">ngUpgrade</p>
            <CheckBox />
            <p className="pkgmanage">Package Manager</p>
            <Button2 />
            <button className="btnShow btnShowFont">Show me how to update!</button>
        </div>
    );
    }
}