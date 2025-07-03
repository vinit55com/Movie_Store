import React from 'react'

function Dropdown({title,options,func}) {
    return (
        <div className='select   w-full'>
            <select onChange={func} name="format" id="format"  className='bg-transparent'>
            <option value="0" disabled>{title}</option>
            {options.map((o,i)=><option key={i} value={o}>{o.toUpperCase()}</option>)}
            </select>
        </div>
    )
}

export default Dropdown
