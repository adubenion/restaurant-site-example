import React, { Component } from 'react';
import {HashRouter as Router, Link} from 'react-router-dom'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            nav: [
                "Home",
                "Menu",
                "Reserve",
                "Contact"
            ],

            menuHeaders: [
                "Appetizers",
                "Entrees",
                "Desserts"
            ],

            fillerText: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            "eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation",
            "ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ]
        }
    }
    render() {
        return (
            <div>
                <div id="pastries">
                    <div className="banner-top">
                        <header>
                            <h1 id="title">Restaurant</h1>
                        </header>
                        <div>
                            <button>{this.state.nav[0]}</button>
                            <a href="#menu" ><button>{this.state.nav[1]}</button></a>
                            <button>{this.state.nav[2]}</button>
                            <a href="#contact" ><button>{this.state.nav[3]}</button></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>{this.state.fillerHeader}</h2>
                            <ul>
                                <li>{this.state.fillerText[0]}</li>
                                <li>{this.state.fillerText[1]}</li>
                                <li>{this.state.fillerText[2]}</li>
                                <li>{this.state.fillerText[3]}</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h2>{this.state.fillerHeader}</h2>
                            <ul>
                                <li>{this.state.fillerText[0]}</li>
                                <li>{this.state.fillerText[1]}</li>
                                <li>{this.state.fillerText[2]}</li>
                                <li>{this.state.fillerText[3]}</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h2>{this.state.fillerHeader}</h2>
                            <ul>
                                <li>{this.state.fillerText[0]}</li>
                                <li>{this.state.fillerText[1]}</li>
                                <li>{this.state.fillerText[2]}</li>
                                <li>{this.state.fillerText[3]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div id="menu">
                        <h1>Menu</h1>
                    </div>
                <div id="beverages">
                    <div className="row">
                        <div className="col">
                            <h2>{this.state.menuHeaders[0]}</h2>
                            <ul>
                                <li>{this.state.fillerText[0]}</li>
                                <li>{this.state.fillerText[1]}</li>
                                <li>{this.state.fillerText[2]}</li>
                                <li>{this.state.fillerText[3]}</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h2>{this.state.menuHeaders[1]}</h2>
                            <ul>
                                <li>{this.state.fillerText[0]}</li>
                                <li>{this.state.fillerText[1]}</li>
                                <li>{this.state.fillerText[2]}</li>
                                <li>{this.state.fillerText[3]}</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h2>{this.state.menuHeaders[2]}</h2>
                            <ul>
                                <li>{this.state.fillerText[0]}</li>
                                <li>{this.state.fillerText[1]}</li>
                                <li>{this.state.fillerText[2]}</li>
                                <li>{this.state.fillerText[3]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div id="contact">
                        <h2>Contact Us</h2>
                        <p>
                        We can be contacted at:<br />
                            <a href="mailto:restaurant-site@restaurant.com">
                            restaurant-site@restaurant.com
                            </a><br />
                        (617) 585-REST
                        </p>
                    </div>
                <div className="banner-bot"></div>
            </div>
        );
    }
}

export default App;
