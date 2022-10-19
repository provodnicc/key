import React, { FC } from "react";
import { IRowData } from "../../types/types";

interface RowProps {
    rowData: IRowData
}

const DataTableRow: FC<RowProps> = ({
    rowData
}) =>{
    return ( 
        <div className='Row line'>

            <div className='col-1'>{rowData.id}</div>
            <div className='col-2'>{rowData.sum}</div>
            <div className='col-3'>{rowData.chek}</div>
            <div className='col-4'>{rowData.DT}</div>
            <div className='col-5'>{rowData.KT}</div>
        </div>

    )
}

export default DataTableRow