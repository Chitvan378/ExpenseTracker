import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
function List({transact}){
  console.log(transact);
  return (
    <div className='flex flex-col py-6 gap-3'>
        {/* <h3 className='py-3 font-bold text-l'>History</h3>
        {transact.map((elem) => <Transaction category={elem} />)} */}
    </div>
  )
}
function Transaction({category}){
    if(!category) return null;
    return(
    <div className='item flex justify-center bg-gray-50 py-2 rounded-r'>
        <button className='px-3'><FontAwesomeIcon icon={faTrash} /></button>
        <span className="w-full block">{category.name}</span>
    </div>
    )
}
export default List