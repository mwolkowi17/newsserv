import React from 'react';
import {MessageItem} from './MessageItem';

export class Lista extends React.Component{
    messageList=(contacts)=>{
        const title=contacts.title;
        const news=contacts.news;
        const author=contacts.author;
        const comment=contacts.comment
        return <MessageItem news={news} author={author} title={title} comment={comment}/>
    }
    render(){
        return(
            <div style={{position:'relative',marginLeft:'auto',marginRight:'auto'}}>
            {this.props.contacts.map(this.messageList)}
            </div>
        )
    
        }
}