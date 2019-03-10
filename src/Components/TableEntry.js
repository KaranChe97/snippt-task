import React, { Component } from 'react';
import EnterData from './EnterData';
import TableHeader from './tableHeader';

import '../App.css';

class TableEntry extends Component{
    constructor(props){
        super(props);
        this.state={
            tableData : props.tableData,
            editableData: props.editableData, // To create default 20 rows
            enteredData:[],
            submitData: props.submitData
        }
    }

    // Temporary local array of twenty to hold the entered data
    editableDataLocal = [
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[] 
    ]

    // Writing returned values from enterData() to local array
  writeData = (index1,index2,data)=>{ 
     this.editableDataLocal[index1][index2] =  data ;
  }
    //  Triggered while submit button hits 
  submitTable = () => {
      this.setState({
          enteredData : this.editableDataLocal
      },this.displayTable); //callback displayTable()    
  }

  displayTable = () =>{
    //   console.log(this.state.enteredData);
      this.state.submitData(this.state.enteredData); // triggers props method submitData()
  }
    
    render(){
      
        return(
            <div>
            <table id="editTable">
                  <TableHeader tableData = {this.state.tableData}/>                   
                   <tbody>
                     {
                         this.state.editableData.map((data,index1)=> //[ map1 ] mapping 20 rows matrix format
                         <tr key={index1}>
                            {this.state.tableData.map((data,index2)=>    //[ map2 ] mapping columns for each row
                                <EnterData key= {index2} key1={index1}  key2={index2}
                                colType = {data.colType} multiValue = {data.multiValue}
                                writeData = {this.writeData} />
                            ) // end of [ map2 ]
                            }
                         </tr>
                        ) // end of [ map1 ]                 
                    }
                    </tbody>
            </table>
            <br></br>
            <input type = "button" id="submitTableBtn" value = "Submit Table" onClick = {this.submitTable} /> 
            <br></br>
            </div>

        );
    }
}

export default TableEntry;