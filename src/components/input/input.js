import React from 'react'
import './input.css'

const Input = ({ inputChange, label, ...properties }) => (
    <div className='inputArea' >
        <input className='inputHandle' onChange={inputChange} {...properties} />
        {
            label ?
                (<label className={`${properties.value.length ? 'filled' : ''} inputHandleSize`}>
                    {label}
                </label>)
                : null
        }
    </div>
)

export default Input;