import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
import Label from './Labels'
import config from '../datafiles/chartData';

Chart.register(ArcElement);
const Graph = () => {
  return (
    <div className='flex justify-content max-w-xs mx-auto'>
        <div className='item'>
            <div className='chart relative'>
                <Doughnut {...config}/>
                <h3 className='mb-4 font-bold title'>Total
                  <span className='block text-2xl text-emerald-400'>${0}</span>
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