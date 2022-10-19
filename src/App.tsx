import React from 'react';
import './App.css'
import Table from './components/table/table';
import DataTable from './components/data-table/data-table';
import { IRowData } from './components/types/types';

function App() {
  const data: IRowData[] = [
    {
      id: 1, 
      sum: 200,
      chek: '1',
      DT: '12',
      KT: '13'
    },
    {
      id: 2,
      sum: 300,
      chek: '2',
      DT: '123',
      KT: '321'

    },
    {
      id: 3,
      sum: 400,
      chek: '3',
      DT: '900',
      KT:'324'

    },
  ]

  const cheks = [
    'asdad', 'adasda', 'adsdsa'
  ]
  return (
    <div className="App">
      <Table cheks={cheks}/>
      <DataTable rowDatas={data}/>
      
    </div>
  );
}

export default App;
