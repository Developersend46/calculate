import React, { useState } from 'react'
import { validateExpression } from '../_helper'
import { BUTTONS } from '../_constant/index,'
// import {services} from '../_services'
function TaskOneAndTwo() {
    const [text, setText] = useState('')
    const onChange = (e) => {
        setText(e.target.value)
    }

    // const getRandomValue = async () => {
    //     console.log("sssssssss", await services.getContry())
    // }

    
    return (
        <div>
            <h4>Calculate</h4>
            <div>
                <input value={text} className='form-control' onChange={onChange} placeholder='Write expression here...' />
            </div>
            <div className='expression'>
                {text ? <div>{validateExpression(text)}</div> : null}
            </div>

            {/* <div><button onClick={() => getRandomValue()}>Random</button></div> */}

            <div className='col'>
                {BUTTONS.map(num => <button className='number-button' onClick={()=>setText(text+num)}>{num}</button>)}
                <button className='number-button' onClick={()=>setText("")}>Clear</button>
            </div>
        </div>
    );
}

export default TaskOneAndTwo;