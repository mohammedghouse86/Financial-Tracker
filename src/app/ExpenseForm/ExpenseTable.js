import React, {useEffect, useState} from 'react';
import {getexpense} from '../actions/index';
import {deleteExpense} from '../actions/index';
import Image from 'next/image';
import Trash from '../../../public/Trash.png'
import Edit from '../../../public/edit.png';
import Modal from '../components/EditExpensesModal';

const ExpenseTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [E_item, setE_item] = useState([]);
  const openModal = (item) => {
    setE_item(item);
    setIsModalOpen(true);
  }
  const closeModal = () => setIsModalOpen(false);
    const [data, setData]= useState(null);
    useEffect( ()=>{
        const someFunc = async() =>{
            const json = await getexpense();
            setData(json);
        }
        someFunc();        
    },[])
    console.log(data);
    const handelDelete = (id) => {
      console.log(id)
      deleteExpense(id)
    }
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
            <th></th>
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
              <td><button onClick={()=>{openModal(item)}}><Image src={Edit} width={60} height={50}/></button></td>
              <td><button onClick={()=>handelDelete(item._id)}><Image src={Trash} width={40} height={30}/></button></td>
            </tr>))}          
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal} item={E_item}>
        <p className="text-gray-700">This is the content inside the modal.</p>
      </Modal>
    </>
  )
}

export default ExpenseTable
