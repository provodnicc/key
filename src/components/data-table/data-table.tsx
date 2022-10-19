import React, { FC } from 'react';
import './data-table.css'
import DataTableRow from './data-table-row/data-table-row';
import { IRowData } from '../types/types';

interface DataTableProps{
    rowDatas: IRowData[]
}

const DataTable: FC<DataTableProps> = ({rowDatas})=>{
    return(
        <div className='DataTable'>
            <div className='Row base'>

                <div className='col-1'>#</div>
                <div className='col-2'>Сумма</div>
                <div className='col-3'>Счет получателя</div>
                <div className='col-4'>ДТ</div>
                <div className='col-5'>КТ</div>
            </div>
            
            {rowDatas.map(row => <DataTableRow rowData={row}/>)}
            
        </div>
        
        
    )
}
export default DataTable