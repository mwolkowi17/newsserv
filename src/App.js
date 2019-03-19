import React, { Component } from 'react';
import {Header} from './Header';
import {Status} from './Status';
import {Lista} from './Lista';
import {Button} from './Button';
import './App.css';

const Information=require('./DataFile')


class App extends Component {
  constructor(){
    super();
    this.state={
      contacts:Information
    }
  }
  finder=()=>{
    return( 
    <input type='text' style={{position:'relative', bottom:'22px', height:'32px', width:'300px', marginLeft:''}} onInput={this.filterNews.bind(this)} ></input>
    )
    
  }
  reset=()=>{
    return(
      <Button name='Reset' color='green' left='400px' onClick={this.handleClickReset.bind(this)}/>
    )
  }
  filterNews=(e)=>{
    const text = e.currentTarget.value;
    const filteredNews=this.getFilteredNewsForText(text)
    this.setState({
      contacts: filteredNews
    })
    
  }
  
  getFilteredNewsForText(text){
    return this.state.contacts.filter(check=>check.news.toLowerCase().includes(text.toLowerCase()))
  }

  handleClickReset=()=>{
    this.setState({
      contacts:Information
    })
  }
  render() {
    return (
      <div className="App">
         <div style={{position:'relative'}}>
           <Header name="Header" find={this.finder()} />
           <Status name="Status" />
           <Lista contacts={this.state.contacts} />
           
           
         </div>
      </div>
      
    );
  }
}

export default App;
