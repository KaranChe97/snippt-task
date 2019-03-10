import  React from 'react';
import '../App.css';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';

 class MultiSelect extends React.Component{
  // define the array of data
  constructor(props){
      super(props);
    this.state = {
        multiValue: []
    }  
}
handleMultiValue = this.props.handleMultiValue;

  onChangeHandler = (e) =>{
    this.setState({
    multiValue : e.value,  // e.value has the entered data
    },this.handleMultiValue(this.state.multiValue)); // setState callBack calls handleMultiValue
    
  }
   sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
  render() {
    return (
        // specifies the tag for render the MultiSelect component
    <div id="mtselement">
      <MultiSelectComponent  name="multiValue"  
      value = {this.state.multiValue}  dataSource={this.sportsData} 
      allowCustomValue={true} placeholder="Select Multiple Values"
      change = {this.onChangeHandler} />
    </div>
    );
  }
}
export default MultiSelect;