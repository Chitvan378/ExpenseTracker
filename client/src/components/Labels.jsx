import React from 'react'
import {default as api} from '../store/apislice'
import {getLabels} from '../middlewares/helper'

function Labels() {
    const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery();
    let Transactions;

    if(isFetching){
        Transactions = <div>Fetching</div>
    }
    else if(isSuccess){
        Transactions = getLabels(data,'type').map((data, i) => <LabelComponent key = {i} elem={data}/>)
    }
    else{
        Transactions = <div>console.error();</div>
    }

  return (
    <div>
        {Transactions}
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
                <h3 className='font-bold'>{Math.round(elem.percent) ?? 0} %</h3>
        </div>
    )
}

export default Labels