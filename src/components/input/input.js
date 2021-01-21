import React from 'react'
import './input.css'

const Input = ({ inputChange, label, ...properties }) => {
    return (
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
}

export default Input;