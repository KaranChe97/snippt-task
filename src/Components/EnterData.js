import React, { Component } from 'react';

class EnterData extends Component{
constructor(props){
super(props);
this.state = {
     colType : props.colType,
     multiValue : props.multiValue,
     a1: props.key1,
     a2: props.key2,
     writeData: props.writeData
    }   
}
// Handling input events
handleChange = e =>{
    e.preventDefault();
    this.setState({
        localdata: e.target.value
    }, this.sendData);  // callback function sendData()
  }
// calling props method => writeData with params of cell address and data
sendData = () => {
    this.state.writeData(this.state.a1,this.state.a2,this.state.localdata);
}
   

    render(){
        if(this.state.colType==="multiSelect") { 
            return(   
           <td>
           <select id="fooSelect" onChange= {this.handleChange} >
               {
                   this.state.multiValue.map((data,index)=>
                     <option key ={index} value={data}>{data}</option> )
               }
           </select>
           </td> )
        }
        else{
            return(            
                <td>
                <input type ={this.state.colType} placeholder={this.state.colType} onChange = {this.handleChange}/>
                </td> )
          }                  
       
    }
}
export default EnterData;