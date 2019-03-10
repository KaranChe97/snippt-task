import React from 'react';
import '../App.css';
const TableHeader = (props) => {
const tData = props.tableData;
// returns thead for table    
return(
    tData.map((data,index)=>          
        <thead key={index}>
            <tr>
                <th id="theader">{data.colName.toUpperCase()}</th>
            </tr>
        </thead>
     )
);
    
}

export default TableHeader;