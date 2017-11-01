import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div id="pastries">
                    <div className="banner-top">
                        <header>
                            <h1>Restaurant</h1>
                        </header>

                        <section>
                            <button>Home</button>
                            <button>Reserve</button>
                            <button>Contact</button>
                        </section>
                    </div>
                    <div className="row">
                        <div className="col">
                        <h2>here's some text</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                         nisi ut aliquip ex ea commodo consequat.
                         </p>
                        </div>
                        <div className="col">
                        <h2>here's some text</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                         nisi ut aliquip ex ea commodo consequat.
                         </p>
                        </div>
                        <div className="col">
                        <h2>here's some text</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                         nisi ut aliquip ex ea commodo consequat.
                         </p>
                        </div>
                    </div>
                </div>
                <div id="beverages">
                    <div className="banner-mid"></div>
                    <div className="row">
                        <div className="col">
                        <h2>here's some text</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                         nisi ut aliquip ex ea commodo consequat.
                         </p>
                        </div>
                        <div className="col">
                        <h2>here's some text</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                         nisi ut aliquip ex ea commodo consequat.
                         </p>
                        </div>
                        <div className="col">
                        <h2>here's some text</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                         nisi ut aliquip ex ea commodo consequat.
                         </p>
                        </div>
                    </div>
                </div>
                <div className="banner-bot"></div>
            </div>
        );
    }
}

export default App;
