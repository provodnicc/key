import React from 'react';
import './data-table.css'
import DataTableRow from './data-table-row/data-table-row';
import { IRowData } from '../types/types';

const data: IRowData[] = [
    {
      id: 0, 
      sum: 0,
      chek: '',
      DT: '',
      KT: ''
    },
]
class DataTable extends React.Component 
{
    Data: Array<IRowData>
    constructor(props: any){
        super(props)
        this.Data = data
        // this.state = {
            // Data: data
        // }
    }

    fetchDataTable(){
        const rowDatas = []
        const countRows = Math.random()*100
        for(let i=1;i<countRows;i++ ){
            let ctx = {
                id: i,
                sum: Math.round(Math.random()*10000),
                chek: String(Math.round(Math.random()*100000000)),
                DT: String(Math.random()*10000000),
                KT: String(Math.random()*10000000)
            }
            rowDatas.push(ctx)
        }
        return rowDatas
    }

    async componentDidMount(){
        this.Data = this.fetchDataTable()
        this.forceUpdate()
    }

    render(){
        return(
            <div className='DataTable'>
                <div className='Row base'>
    
                    <div className='col-1'>#</div>
                    <div className='col-2'>Сумма</div>
                    <div className='col-3'>Счет получателя</div>
                    <div className='col-4'>ДТ</div>
                    <div className='col-5'>КТ</div>
                </div>
                
                {this.Data.map(row => <DataTableRow key={row.id} rowData={row}/>)}
                
            </div>
        )
    }
    

    
}
export default DataTable