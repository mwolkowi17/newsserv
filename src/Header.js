import React from 'react';
import {Button} from './Button';

const HeaderStyle={
    width:'1240px',
   
    marginRight:'auto',
    marginLeft:'auto',
    postion:'ralative',
    paddingTop:'10px',
    marginTop:'10px',
    marginBottom:''
   
   
  
}
export const Header=(props)=>{
    return(
        <div style={HeaderStyle}>
       <div style={{display:'inline-block',
       position:'relative' }}>
        <Button name='Filter▼' right='' color='whitesmoke'/>
        <div style={{float:'left',marginTop:'22px'}}>
        {props.find}
        </div>
       
        <Button name='Labels' left='30px'/>
        <Button name='Milestones' right='70px'/>
         <div style={{float:'left'}}>
         {props.reset}     
        </div>
        <Button name='Reset' color='Green' left='400px' />
        </div>
        </div>
    )
}