import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ItemProvider} from "./contexts/item-context";
import ItemEditor from './components/item-editor';
import ItemName from '../src/components/item-name-display';

class App extends Component {

    changeItemNameApp = (newItemName) => {
        this.setState({itemName: newItemName})
    };

    constructor() {
        super();
        this.state = {
            itemName: 'Default Item',
            changeItemName: this.changeItemNameApp
        };
    }

    render() {
        return (
            <ItemProvider value={this.state}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                        <ItemEditor></ItemEditor>
                        <ItemName></ItemName>
                    </header>
                </div>
            </ItemProvider>
        );
    }
}

export default App;
