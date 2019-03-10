import React from 'react';
import '../App.css';
// mapping datas from tableData into new table
const ShowTable = props =>{
 const finalData = props.finalData;
return(
    finalData.map((data,index)=>{
       return (
       <tr key={index}>
         {
             data.map((datas,index)=>{
                return <td id="showTableTd" key={index}> {datas} </td>
             })
        
        }
        </tr>
        ) // end of inner return
    }) // end of outer map   
); // end of outer return
}

export default ShowTable;