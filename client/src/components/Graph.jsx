import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
import Label from './Labels'
import {chart_data, getTotal} from '../middlewares/helper'
import {default as api} from '../store/apislice'
Chart.register(ArcElement);
const Graph = () => {
  chart_data()
  const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery();
    let graphData;

    if(isFetching){
        graphData = <div>Fetching</div>
    }
    else if(isSuccess){
        graphData = <Doughnut {...chart_data(data)}/>
    } 
    else if(isError){
        graphData = <div>console.error();</div>
    }
  return (
    <div className='flex justify-content max-w-xs mx-auto'>
        <div className='item'>
            <div className='chart relative'>
                {graphData}
                <h3 className='mb-4 font-bold title'>Total
                  <span className='block text-2xl text-emerald-400'>Rs.{getTotal(data) ?? 0}</span>
                </h3>
            </div>
            <div className='flex flex-col py-10 gap-4'>
               <Label></Label>
            </div>
        </div>
    </div>
  )
}

export default Graph;