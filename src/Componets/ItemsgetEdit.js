import React from 'react';
import {ItemEditCard} from './ItemEditCard';

export class ItemsgetEdit extends React.Component {
    render() {
        return this.props.items.map((item) => {
            return <ItemEditCard item={item} ReloadRecords={this.props.ReloadRecords}></ItemEditCard>//Calls this turning each item into a card
        })


    }
}