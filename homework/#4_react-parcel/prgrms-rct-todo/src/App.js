import React, { Component } from 'react';

export default class App extends Component {
    state = {};
    render() {
        return (
            <div>
                <p>only this paragraph will get the style :)</p>
                <style jsx>{
                    `
                    p{
                        color:red;
                    }
                    `
                }
                </style>


            </div>
        );
    }
}
