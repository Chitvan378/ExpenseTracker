import React from 'react'
const labelsobj =[
    {
        type: 'Savings',
        color: 'yellow',
        ratio: 45
    },
    {
        type: 'Investment',
        color: 'yellow',
        ratio: 30
    },
    {
        type: 'Expense',
        color: 'yellow',
        ratio: 20
    }
]

function Labels() {
  return (
    <div>
        {labelsobj.map((data, i) => <LabelComponent key = {i} elem={data}/>)}
    </div>
  )
}

const LabelComponent = ({elem}) => {
    if(!elem) return <></>
    return ( 
        <div className='labels flex justify-between py-2'>
            <div className='flex gap-2 align-items-center'>
                <div className='w-2 h-2 rounder py-3' style={{backgroundColor:`${elem.color}`}}></div>
                <h3 className='text-md '>{elem.type ?? ""}</h3>
            </div>
                <h3 className='font-bold'>{elem.ratio ?? 0}</h3>
        </div>
    )
}

export default Labels