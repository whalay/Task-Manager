import React from 'react'

const Card = (props) => {
    return (
        <div className='container m-auto bg-orange-200  pt-4 mt-4 max-w-3xl border shadow-2xl'>
            {props.children}
        </div>
    )
}

export default Card