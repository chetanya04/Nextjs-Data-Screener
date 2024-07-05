"use client"
import { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.min.css'; // DataTables CSS
import 'datatables.net-dt/js/dataTables.dataTables'; // DataTables JS
import 'select2/dist/css/select2.min.css'; // Select2 CSS
import 'select2';
import 'papa-parse';

const DataTable = ({ data }) => {
  useEffect(() => {
    const table = $('#example').DataTable({
      data: data,
      columns: [
        { data: 'company', title: 'Company' },
        { data: 'ticker', title: 'ticker' },
        { data: 'Sector', title: 'Sector' },
        { data: 'Industry', title: 'Industry' },
        { data: 'revenue', title: 'revenue' },
        { data: 'gp', title: 'gp' },
        { data: 'fcf', title: 'fcf' },
        { data: 'capex', title: 'capex' }
      ]
    });

    return () => {
      table.destroy();
    };
  }, [data]);

  return (
    <>
    <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css"/>
    <table id="example" className="display" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Company</th>
          <th>Ticker</th>
          <th>Sector</th>
          <th>Industry</th>
          <th>Revenue</th>
          <th>GP</th>
          <th>FCF</th>
          <th>CapEx</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    </>
  );
};

export default DataTable;
