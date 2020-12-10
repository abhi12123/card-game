import React from 'react';

const Page2 = (props) => {
    const back = () => {
        props.setPageNum(props.pageNum-1)
    }
    return (
        <div className='page2'>
            <h1>Shuffled Menu</h1>
            <button onClick = {() => back()}>Back</button>
        </div>
    )
}

export default Page2