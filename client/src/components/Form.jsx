import React from 'react'
import {useForm} from 'react-hook-form'
import List from './List';
import {default as api} from "../store/apislice"


function Form() {
    const {register, handleSubmit, resetField} = useForm();
    const [addTransaction] = api.useAddTransactionMutation();
    const onsubmit = async (data) => {    
        if(!data)
            return {}
        await addTransaction(data).unwrap();
        console.log(data)
        resetField('name');
        resetField('amount');
    }
  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl'> Transactions </h1>
        <form action="" id = 'form' onSubmit={handleSubmit(onsubmit)}>
            <div className='grid gap-4'>
                <div className="input-group form-input">
                    <input type="text" {...register('name')} placeholder='Salary, HouseRent etc' className='p-2'/>
                </div>
                <select className="form-input p-2" {...register('type')}>
                    <option value="Savings" defaultValue>Savings</option>
                    <option value="Investment">Investment</option>
                    <option value="Expense">Expense</option>
                </select>
                <div className="input-group form-input">
                    <input type="text" {...register('amount')}placeholder='Amount' className='p-2'/>
                </div>
                <div className="submit-btn">
                    <button className="border py-2 text-white bg-indigo-500 w-full">Add Transaction</button>
                </div>
            </div>
        </form>
        <List />
    </div>
  )
}

export default Form