import React, {Component} from 'react';
import ItemContext,{ItemConsumer} from "../contexts/item-context";


class ItemName extends Component {

    render() {
        return (
         <ItemConsumer>
             {state=>(
                 <p>Hello from Item Name Component, Name is <u>{state.itemName}</u></p>
             )}
         </ItemConsumer>
        );
    }
}

ItemName.contextType = ItemContext;

export default ItemName;
