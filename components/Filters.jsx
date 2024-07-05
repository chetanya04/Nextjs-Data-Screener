"use client"
import { useState } from 'react';
import Select from 'react-select';

const Filters = ({ data, onFilterChange }) => {
  const [filters, setFilters] = useState([{ column: '', value: '' }]);

  const addFilter = () => {
    setFilters([...filters, { column: '', value: '' }]);
  };

  const handleColumnChange = (index, selectedOption) => {
    const newFilters = [...filters];
    newFilters[index].column = selectedOption.value;
    setFilters(newFilters);

    onFilterChange(newFilters);
  };

  const handleValueChange = (index, selectedOption) => {
    const newFilters = [...filters];
    newFilters[index].value = selectedOption.value;
    setFilters(newFilters);

    onFilterChange(newFilters);
  };

  const columns = [
    { label: 'Company', value: 'company' },
    { label: 'Ticker', value: 'ticker' },
    { label: 'Sector', value: 'Sector' },
    { label: 'Industry', value: 'Industry' },
    { label: 'Revenue', value: 'revenue' },
    { label: 'GP', value: 'gp' },
    { label: 'FCF', value: 'fcf' },
    { label: 'CapEx', value: 'capex' }
  ];

  const getUniqueValues = (column) => {
    return [...new Set(data.map(item => item[column]))].map(value => ({ label: value, value }));
  };

  return (
    <div id="filter-container">
      {filters.map((filter, index) => (
        <div key={index} className="filter-row">
          <Select
            options={columns}
            onChange={(selectedOption) => handleColumnChange(index, selectedOption)}
            placeholder="Select column"
          />
          <Select
            options={getUniqueValues(filter.column)}
            onChange={(selectedOption) => handleValueChange(index, selectedOption)}
            placeholder="Select value"
          />
        </div>
      ))}
      <button onClick={addFilter}>Add Filter</button>
    </div>
  );
};

export default Filters;
