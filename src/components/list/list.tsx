import React, {Dispatch, FC, SetStateAction, useState} from "react";
import './list.css'
interface ListProps{
    setCurrentField: Dispatch<SetStateAction< string[]>>,
    setState:  Dispatch<SetStateAction< boolean>>,
    data: Array<string[]>,
}

const List: FC<ListProps> = ({data, setCurrentField, setState}) => {

    function setCurrent(field: string[]){
        setCurrentField(field)
        setState(false)
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