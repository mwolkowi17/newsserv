import React from 'react';

const StatusStyle={
    width:'1240px',
    border:'solid 1px silver',
    marginRight:'auto',
    marginLeft:'auto',
    postion:'ralative',
    borderTopLeftRadius:'6px',
    borderTopRightRadius:'6px',
    backgroundColor:'whitesmoke',
    paddingTop:'20px',
    paddingBottom:'20px'
}

export const Status =(props)=>{
    return(
        <div style={StatusStyle}>
        <span style={{margin:'10px'}}>291 Open</span>
        <span style={{marginRight:'500px'}}>3,9828 Closed</span>
        <span style={{margin:'10px'}}>Author▼</span>
        <span style={{margin:'10px'}}>Projects▼</span>
        <span style={{margin:'10px'}}>Label▼</span>
        <span style={{margin:'10px'}}>Milestones▼</span>
        <span style={{margin:'10px'}}>Assignee▼</span>
        <span style={{margin:'10px'}}>Spot▼</span>
        
        
        
        
        
        </div>
    )
}