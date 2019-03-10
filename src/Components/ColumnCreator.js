 import React, { Component } from 'react';
 import MultiSelect from './MultiSelect.js';
 import '../App.css';

 class ColumnCreator extends Component{
     constructor(props){
         super(props);
         this.intialState = {
             colType:'date',
             colName : "",
             multiValue: ""
            }
        this.state = this.intialState;
        }
    // Handling form Inputs
     handleChange = e =>{
         this.setState({
             [e.target.name]: e.target.value
         })  
     }
    //  handling multiSelect values from multiselect component
     handleMultiValue = (data) =>{
            data = ["Not Selected",...data];  // 
         this.setState({
             multiValue:data
         })
     }
    //  triggers submitHeader function in parentComponent
    addColumn = () =>{
        this.props.addHeaders(this.state);
        this.setState(this.intialState);
     }
     //calls props method
     submitColumn = () =>{
         this.props.submitHeader();
     }
    
     render(){
         return(
             <div>
                 <h4> Create Column</h4>
                 <form>
                    <label>Column Name: </label>
                    <input type="text" 
                     name = "colName" 
                     value = {this.state.colName}
                     placeholder = "Column Name"
                     onChange = {this.handleChange}/>

                    <label id= "colHeader">Column Type: </label>
                    <select value = {this.state.type}
                     name = "colType" 
                     onChange = {this.handleChange}>
                    <option defaultValue value = "date">Date</option>
                    <option value = "number">Number</option>
                    <option  value = "multiSelect">Multiselect</option>
                    </select> 
                  {/* Conditional rendering of Multi Select using ternary operator */}
                  {
                    this.state.colType === "multiSelect" ?
                   <MultiSelect handleMultiValue = {this.handleMultiValue} />
                    :null 
                  }   
                    <br></br>
                    {/* triggers add Column function whwn clicking */}
                    <input type = "button" id="addColumnBtn"value = "Add Column" onClick = {this.addColumn} /> 
                    <br></br>
                    <input type = "button" id="submitColumnBtn" value = "Submit Columns" onClick = {this.submitColumn} /> 
                 </form>
             </div>
         );
     }
 }

 export default ColumnCreator;