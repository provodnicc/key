import React, {FC} from "react";
import './list.css'
interface ListProps{
    // state: boolean,
    data: string[],
}

const List: FC<ListProps> = ({data}) => {
    return   (
        <div>
            <ul className="drop">
                {data.map(str =>{
                   return (
                        <li key={str}>
                            {str}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List