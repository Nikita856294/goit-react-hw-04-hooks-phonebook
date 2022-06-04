import React from 'react';
import { FilterInput } from './FilterStyle';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <FilterInput type="text" value={value} onChange={onChange} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
