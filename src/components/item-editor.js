import React, {Component} from 'react';
import ItemContext from '../contexts/item-context';

class ItemEditor extends Component {
    static contextType = ItemContext;

    constructor() {
        super();

        this.state = {itemName: ''};
        this.changeName = this.changeName.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    changeName = function () {
        this.context.changeItemName(this.state.itemName);
    };

    handleNameChange(event) {
        this.setState({itemName: event.target.value});
    }

    render() {
        return (<div>Hello from Item Editor Component
            <br/>
            <input value={this.state.itemName} onChange={this.handleNameChange}/>
            <button onClick={this.changeName}>change name</button>
        </div>)
    }
}

export default ItemEditor
