import React from 'react';
import { ShowCurrentItems } from './ShowCurrentItems';
export class ItemsgetView extends React.Component{
render(){
    return this.props.items.map( (item)=>{ //Sends each individual record to showcurrentitems rendering each in own card
        return <ShowCurrentItems item={item} ReloadRecords={this.props.ReloadRecords}></ShowCurrentItems>
    })
       
  
}
}