import React from 'react';
import {createPortal} from 'react-dom';

export default class portal extends React.Component{
    constructor(props){
        super(props);
        const doc = window.document;
        this.node = doc.createElement('div');
        doc.body.appendChild(this.node);
    }
    componentWillUnmount(){
        window.document.body.removeChild(this.node)
    }
    render(){
        return createPortal(
            <div>
                练习传送门
            </div>,this.node
        )
    }
}