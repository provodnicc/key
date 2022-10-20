import React,{FC, useState} from 'react'

import './table.css'
import list from './list.png'
import List from '../list/list'


interface chekProps{
    cheks: Array<string[]>
}

const Table: FC<chekProps> = ({cheks}) => {
    let [state, setState] = useState(false)
    let [currentField, setCurrentField] = useState(['',''])
    function activateList(){
        setState(!state)
    }

    return (
        <div className="Table">
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
                            { state? <List setState={setState} setCurrentField={setCurrentField} data={cheks}/>: null}
                            <input 
                                value={currentField[0]} 
                                onChange={(e)=>{ 
                                    const data = [
                                        e.target.value, 
                                        currentField[1]
                                    ]
                                    setCurrentField(data) 
                                }} 
                                className='input-field required'
                            />
                        
                            <img 
                                src={list} 
                                alt='посмотеть список счетов' 
                                id='list-ico' 
                                onClick={activateList}>
                            </img>
                        </div>
                        <div className='input flex-box hight'>
                            <input 
                                value={currentField[1]} 
                                onChange={(e)=>{ 
                                    const data = [
                                        currentField[0], 
                                        e.target.value
                                    ]
                                    setCurrentField( data) 
                                }}
                                className='input-field'
                            />
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