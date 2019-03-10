import React, { Component } from 'react'
import ColumnCreator from './ColumnCreator';
import TableEntry from './TableEntry';
import ShowTable from './showTable';
import TableHeader from './tableHeader';

class ParentComponent extends Component{
    state = {
        tableData:[],
        isSubmitted: false,
        isDataSubmitted:false,
        editableData: [     // To create default 20 rows
            {0 : ""},
            {1: ""},
            {2: ""},
            {3: ""},
            {4: ""},
            {5: ""},
            {6: ""},
            {7: ""},
            {8: ""},
            {9: ""},
            {10: ""},
            {11: ""},
            {12: ""},
            {13: ""},
            {14: ""},
            {15: ""},
            {16: ""},
            {17: ""},
            {18: ""},
            {19: ""}
        ],
        enteredData : []
    }
    
    addHeaders =(e) =>{  // Appending new state from columnCreator to tabelData[]
        // console.log("column Headers Added");
        this.setState({tableData:[...this.state.tableData,e]}); // merge using spread Operator
    }
    // mounts TableEnty component
    submitHeader = () =>{ 
        this.setState({isSubmitted:true});
        // console.log("column headers submitted");
    }

    //Handling submitted data from TableEntry
    submitData = (data) => {
        this.setState({
            enteredData : data,
            isDataSubmitted:true
        })
    }
    render(){
        return(
            <div>
                <ColumnCreator 
                addHeaders={this.addHeaders}
                submitHeader = {this.submitHeader}
                />
             <br></br>
             <div id="breaker"></div>
                {this.state.isSubmitted ? 
                <div>
                    <TableEntry tableData = {this.state.tableData} 
                    editableData = {this.state.editableData} submitData = {this.submitData}/>
                 </div>
                 : null
                }
                <br></br>

                {
                    this.state.isDataSubmitted ?
                    <div id="breakerUp">
                    <table id = "showTable">
                        <TableHeader tableData = {this.state.tableData} />
                        <tbody>
                        <ShowTable  finalData= {this.state.enteredData}/> 
                        </tbody>
                    </table>
                    </div>
                     : null
                }
            </div>
        )
    }
}

export default ParentComponent;