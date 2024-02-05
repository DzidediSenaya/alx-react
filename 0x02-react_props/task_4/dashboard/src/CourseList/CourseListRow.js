// CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const Tag = isHeader ? 'th' : 'td';

  return (
    <tr>
      {textSecondCell === null ? (
        <Tag colSpan="2">{textFirstCell}</Tag>
      ) : (
        <>
          <Tag>{textFirstCell}</Tag>
          <Tag>{textSecondCell}</Tag>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;

