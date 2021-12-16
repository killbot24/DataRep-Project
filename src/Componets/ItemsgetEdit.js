import React from 'react';
import {ItemEditCard} from './ItemEditCard';

export class ItemsgetEdit extends React.Component {
    render() {
        return this.props.items.map((item) => {//Sends each individual record to itemeditcard rendering each in own card
            return <ItemEditCard item={item} ReloadRecords={this.props.ReloadRecords}></ItemEditCard>
        })


    }
}