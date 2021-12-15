import React from 'react';
import { ShowCurrentItems } from './ShowCurrentItems';
export class ItemsgetView extends React.Component{
render(){
    return this.props.items.map( (item)=>{
        return <ShowCurrentItems item={item} ReloadRecords={this.props.ReloadRecords}></ShowCurrentItems>
    })
       
  
}
}