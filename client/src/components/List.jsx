import React from 'react'
import 'boxicons'
import {default as api} from '../store/apislice'

function List(){
  const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();

  const handlerClick = async (e) => {
    e.preventDefault();
    if(!e.target.dataset.id)
      return 0;
    await deleteTransaction({_id: e.target.dataset.id})
  }
  let Transactions;
    if(isFetching){
        Transactions = <div>Fetching</div>
    }
    else if(isSuccess){
        Transactions = data.map((data, i) => <Transaction key = {i} category={data} handler = {handlerClick}/>)
    }
    else if(isError){
        Transactions = <div>{console.error()}</div>
    }

  return (
    <div className='flex flex-col py-6 gap-3'>
        <h3 className='py-3 font-bold text-l'>History</h3>
        {Transactions}
    </div>
  )
}
function Transaction({category, handler}){
    if(!category) return null;
    return(
    <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRight: `4px solid ${category.color}`}}>
        <button className='px-3' onClick = {handler}><box-icon data-id={category._id ?? ''}  color={category.color ??  "#e5e5e5"} size="15px" name="trash" ></box-icon></button>
        <span className="w-full block">{category.name}</span>
    </div>
    )
}
export default List