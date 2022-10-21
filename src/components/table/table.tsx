import React,{FC, useState} from 'react'

import './table.css'
import list from './list.png'
import List from '../list/list'
import { IInputData } from '../types/types'


interface billProps{
    bills: Array<string[]>
}

const input_data = {
    phone: '',
    date: '',
    date_connection: '',
    bill_number: '',
    bill_name: '',
    correspondent: '',
    name_income: '',
}

const Table: FC<billProps> = ({bills}) => {
    let [listState, setListState] = useState(false)
    let [currentField, setCurrentField] = useState(['',''])

    let [inputPhone, setInputPhone] = useState('')
    let [inputDate, setInputDate] = useState('')
    let [inputDateConn, setInputDateConn] = useState('')
    let [inputBillNumber, setInputBillNumber] = useState('')
    let [inputBillName, setInputBillName] = useState('')
    let [inputCorrespondent, setInputCorrespondent] = useState('')
    let [inputNameIncome, setInputNameIncome] = useState('')

    function activateList(){
        setListState(!listState)
    }

    function checkInputs(){
        const inputs = document.getElementsByClassName('input-field required')
        if(!inputDate){
            inputs[0].className += ' input-field-false'
        }

        if(!inputBillNumber){
            inputs[1].className += ' input-field-false' 
        }

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
                    
                <form className='Block input'>
                <button onClick={checkInputs} type={'submit'} className='saveBtn'>Сохранить</button>
                    <div className='row '>
                        <div className='flex-box hight'>

                            <input 
                                onChange={(e)=>setInputPhone(e.target.value)}
                                className='input-field'
                            />
                            <span className='input-text'>Дата*:</span>
                            <input 
                                onChange={(e)=>setInputDate(e.target.value)}
                                type={'date'} 
                                className='input-field required' 
                                required
                            />
                        </div>

                        <div className='flex-box hight'>
                            <span className='input-text'>Дата проводки:</span>
                            <input 
                                onChange={(e)=>setInputDateConn(e.target.value)}
                                type={'date'} 
                            />
                        </div>
                    </div> 
                    
                    <div className='row'>
                        <div id='list' className='flex-box hight'>
                            { listState? 
                                <List 
                                    setListState={setListState} 
                                    setCurrentField={setCurrentField} 
                                    setInputBillNumber={setInputBillNumber}
                                    setInputBillName={setInputBillName}
                                    data={bills}
                                /> : null
                            }
                            <input 
                                value={currentField[0]} 
                                onChange={(e)=>{
                                    const data = [
                                        e.target.value,
                                        currentField[1]
                                    ]
                                    setCurrentField(data) 
                                    setInputBillNumber(e.target.value)
                                }} 
                                className='input-field required'
                                required
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
                                    setCurrentField(data)
                                    setInputBillName(e.target.value)
                                }}
                                className='input-field'
                            />
                        </div>
                    </div>  

                    <div className='row hight'>
                        <input 
                            onChange={(e)=>setInputCorrespondent(e.target.value)}
                            className='input-field'
                        />
                    </div>

                    <div className='row hight'>
                        <input 
                            onChange={(e)=>setInputNameIncome(e.target.value)}
                            className='input-field'
                        />
                    </div>
            </form>
        </div>
    )

}

export default Table