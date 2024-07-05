"use client"
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import DataTable from '../components/DataTable';
import Filters from '../components/Filters';

const Home = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  const handleFilterChange = (filters) => {
    let filteredData = initialData;

    filters.forEach(filter => {
      if (filter.column && filter.value) {
        filteredData = filteredData.filter(item => item[filter.column] === filter.value);
      }
    });

    setData(filteredData);
  };

  return (
    <div>
      <Filters data={initialData} onFilterChange={handleFilterChange} />
      <DataTable data={data} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('./Sample-Data-Screener.csv');
  const csvText = await res.text();

  const results = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true
  });

  const initialData = results.data;

  return { props: { initialData } };
};

export default Home;
