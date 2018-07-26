/* TextArea.js
 *
 * Renders a DropDown, enforcing the usage of value, text
 */

import React from 'react';
import PropTypes from 'prop-types';


class DropDown extends React.Component {
    constructor(props) {
    super(props);
    }

    componentDidMount() {
   // console.log(this.props.options);
    var ddl = document.getElementById("DropDownId");
    for(var i=0; i<this.props.options.length; i++) {
    var option = document.createElement("option");
    option.value = this.props.options[i].value;
    option.text = this.props.options[i].text;
    if(option.value === this.props.selectedValue) {
        option.selected = "selected";
    }

      ddl.appendChild(option);
  }
}
  
render() {
    return <select id="DropDownId" className={this.props.className}/>
  }

}

DropDown.propTypes = {
  className: PropTypes.string
};

export default DropDown;