import React from 'react';
import './App.css'
import Table from './components/table/table';
import DataTable from './components/data-table/data-table';

function App() {

  const cheks = [
    ['номер счета 1', 'название 1'], ['номер счета 2', 'название 2'], ['номер счета 3', 'название 3']
  ]
  return (
    <div className="App">
      <Table cheks={cheks}/>
      <DataTable/>
      
    </div>
  );
}

export default App;
