import React, {Dispatch, FC, SetStateAction, useState} from "react";
import './list.css'
interface ListProps{
    setCurrentField: Dispatch<SetStateAction< string[]>>,
    setListState:  Dispatch<SetStateAction< boolean>>,
    setInputBillNumber:  Dispatch<SetStateAction< string>>,
    setInputBillName:  Dispatch<SetStateAction< string>>,
    data: Array<string[]>,
}

const List: FC<ListProps> = ({
    setCurrentField, 
    setListState, 
    setInputBillNumber,
    setInputBillName, 
    data  
}) => {

    function setCurrent(field: string[]){
        setCurrentField(field)
        setListState(false)
        setInputBillNumber(field[0])
        setInputBillName(field[1])
    }
    return   (
        <div>
            <ul className="drop">
                {data.map(str =>{
                   return (
                        <li key={str[0]} onClick={()=>setCurrent(str)}>
                            {`${str[0]} : ${str[1]}`}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List