import React from 'react'

const MessageListStyle={
    width:'1216px',
    borderBottom: 'solid 1px gainsboro',
    borderRight: 'solid 1px gainsboro',
    borderLeft: 'solid 1px gainsboro',
    padding:'12px',
    listStyleType:'none',
    position:'relative',
    marginLeft:'auto',
    marginRight:'auto'
}

const TitleStyle={
    color:'CornflowerBlue'
}
const NewsStyle={
    textAlign:'left',
}

export const MessageItem=({news,author,title,comment})=>{
 return(
     <li style={MessageListStyle}>
        
        <h1 style={TitleStyle}>{title}</h1>
        <i><p>{author}</p></i>
        <p style={NewsStyle}>{news}</p>
        <p><b>tag:</b>#{comment}</p>
     
        
       
     </li>
 )
}