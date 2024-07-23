import React from 'react'

function Blogitem(props) {
    const { list } = props
    console.log(list)

    return (
        <div>{list.map(e => <>
            <div className='flex justify-between px-5'>
                <h2 className='font-bold'>{e.title}</h2>
                <p>{e.publishedDate}</p>
            </div>
            <p className='px-5'>{e.description}</p>
            <hr />
        </>)}</div>
    )
}

export default Blogitem