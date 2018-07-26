/* GzridControl.js
 *
 * Renders a DropDown, enforcing the usage of value, text
 */

import React from 'react';
import PropTypes from 'prop-types';
import deleteImg from 'containers/HomePage/images/deleteImg.png';



class DivTable extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
    this.state.rows = props.rows;

    this.deleteClick = this.deleteClick.bind(this);
     }
 
loadTable(tableArr){
  var rowDivs = [];
  tableArr.forEach((row, index) => {
  
    rowDivs.push(<div className = {this.props.rowClassName} >
      
       <div className = {this.props.cellClassName}>{<a href="#"  onClick={this.deleteClick}><img  src={deleteImg} alt="Delete" height="25" width="30"/></a>}</div>
       <div className = {this.props.cellClassName}>{row.customerId}</div>
       <div className = {this.props.cellClassName}>{row.customerName}</div>
       <div className = {this.props.cellClassName}>{row.customerSalary}</div>
    
     </div>);
     

 });
 return rowDivs;
 
}

 deleteClick() {
   var arrCustomer = this.state.rows;
   console.log(arrCustomer);
   //console.log('inside delete click');
   arrCustomer.splice(arrCustomer, 1);
   console.log(arrCustomer);
   this.loadTable(arrCustomer);
  
}
  
render() {
  var rowDivs = this.loadTable(this.state.rows);
  console.log(rowDivs);
  return <div id="DivId" className={this.props.divClassName} >{rowDivs}</div>;

  }
}
DivTable.propTypes = {
   className: PropTypes.string
};

export default DivTable;