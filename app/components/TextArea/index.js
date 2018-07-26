/* TextArea.js
 *
 * Renders a TextArea, enforcing the usage of cols, rows, name
 */

import React from 'react';
import PropTypes from 'prop-types';

function TextArea(props) {
  return <textarea className={props.className} name={props.name} rows={props.rows} cols={props.cols}>{props.text}</textarea>
}

// We require the use of src and alt, only enforced by react in dev mode
TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default TextArea;