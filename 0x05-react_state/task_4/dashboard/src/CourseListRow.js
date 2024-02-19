import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr className={isChecked ? 'rowChecked' : ''}>
      {isHeader ? (
        <>
          <th colSpan="2">{textFirstCell}</th>
        </>
      ) : (
        <>
          <td>
            <input type="checkbox" checked={isChecked} onChange={handleChange} />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string.isRequired,
};

CourseListRow.defaultProps = {
  isHeader: false,
};

export default CourseListRow;

