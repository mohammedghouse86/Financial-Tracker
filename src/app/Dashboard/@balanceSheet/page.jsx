import React from 'react';
import '../Dashboard.css'
import {getexpense} from '../../actions/index'

const Page = async() => {
  const data =await getexpense();
  //const [expenses]=data;
  console.log('this is how you get the expenses in the UI=',data)
  return (
    <>
      <div className="card">
        <h2 className="card-title">BALANCE SHEET</h2>
        {data && data.map((item)=>{
          console.log(item)
          return (<div style={{color:'green'}} key={item._id}>{item.category}</div>) })}
      </div>
    </>
  )
}

export default Page
