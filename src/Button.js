import React from 'react';


export const Button=(props)=>{
    return(
        <div style={{position:'relative', width:'90px',height:'30px',border:'solid 1px silver',
        float:'left',
        borderRadius:'6px',
        marginRight:props.right,
        marginLeft:props.left,
        paddingTop:'5px',
        backgroundColor:props.color}} onClick={props.onClick}>
        {props.name}
        </div>
    )
}