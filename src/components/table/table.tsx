import React,{FC, useState} from 'react'

import './table.css'
import list from './list.png'
import List from '../list/list'
import axios from 'axios'
import config from '../../config.json'


import { IRowData } from '../types/types'
interface chekProps{
    cheks: string []
}

const Table: FC<chekProps> = ({cheks}) => {
    let [state, setState] = useState(false)
    function activateList(){
        setState(!state)
    }

    async function fetchDataTable(){
        let data = await axios.get<IRowData>(config.API_URL)
    }

    return (
        <div onLoad={fetchDataTable} className="Table">
                <div className='Block text'>
                    <div className='text-field hight'>
                        Номер:
                    </div> 
                    <div className='text-field hight'>
                        Cчет отправителя*:
                    </div>  
                    <div className='text-field hight'>
                        Корреспондент:
                    </div>
                    <div className='text-field hight'>
                        Наим. дохода:
                    </div>
                </div>
                    
                <div className='Block input'>
                    <div className='row '>
                        <div className='flex-box hight'>
                            <input type={'phone'} className='input-field'/>
                            <span className='input-text'>Дата*:</span>
                            <input type={'date'} className='input-field required'/>
                        </div>

                        <div className='flex-box hight'>
                            <span className='input-text'>Дата проводки:</span>
                            <input type={'date'} />
                        </div>
                    </div> 
                    
                    <div className='row'>
                        <div id='list' className='flex-box hight'>
                            { state? <List data={cheks}/>: null}
                            <input  className='input-field required'/>
                        
                            <img src={list} alt='посмотеть список счетов' id='list-ico' onClick={activateList}>

                            </img>
                        </div>
                        <div className='input flex-box hight'>
                            <input className='input-field'/>
                        </div>
                    </div>  

                    <div className='row hight'>
                        <input className='input-field'/>
                    </div>

                    <div className='row hight'>
                        <input className='input-field'/>
                    </div>
            </div>
        </div>
    )

}

export default Table