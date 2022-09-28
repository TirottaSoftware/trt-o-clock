import React from 'react'
import './StoreFilter.css'

function StoreFilter({ type, options, onChange }) {
    return (
        <div className='store-filter'>
            <p>{type}</p>
            <select onChange={(e) => { onChange(type, e.target.value) }}>
                <option>ALL</option>
                {
                    options.map(opt => {
                        return <option key={opt.toString()}>{opt.toString().toUpperCase()}</option>
                    })
                }
            </select>
        </div>
    )
}

export default StoreFilter