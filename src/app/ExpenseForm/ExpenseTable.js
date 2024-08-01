import React, {useEffect, useState} from 'react';
import {getexpense} from '../actions/index'

const ExpenseTable = () => {
    const [data, setData]= useState(null);
    useEffect( ()=>{
        const someFunc = async() =>{
            const json = await getexpense();
            setData(json);
        }
        someFunc();        
    },[])
    console.log(data);
  return (
    <>
        <table className="min-w-full divide-y divide-gray-200" style={{paddingTop:'70px'}}>
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Cost</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cost</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {data && data.map((item, index) => (
            <tr key={index} >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unit}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.qty}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unitcost}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.totalcost}</td>
            </tr>))}
          
        </tbody>
      </table>
    </>
  )
}

export default ExpenseTable
