'use client'; //THIS IS THE FORM WHERE YOU ENTER THE EXPENSES.
import {uploadexpense} from '../../actions/index'
import React, { useState, useEffect } from 'react';
import '../Dashboard.css';

const Page = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    console.log('running useEffect');
    const timer = setTimeout(() => {
      setDisplay(true);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formdata = new FormData(e.currentTarget);
        const response = uploadexpense(formdata);
        //console.log('this is response =', response)
        if (!!response.error) {
        }
        
    } catch (error) {
        console.error(error);
    }
}

  return (
    <>
      {display && (
        <div className="card">
          <h2 className="card-title">EXPENSES</h2>
          <form onSubmit={handleSubmit}>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">Category</label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  autoComplete="category-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>Fruits</option>
                  <option>Vegetables</option>
                  <option>School Fee</option>
                  <option>Petrol</option>
                  <option>Electric Bill</option>
                  <option>Internet Bill</option>
                  <option>Phone Recharge</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-white">Description</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="cost" className="block text-sm font-medium leading-6 text-white">Cost</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="cost"
                  id="cost"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="cumulativecost" className="block text-sm font-medium leading-6 text-white">Cumulativecost</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="cumulativecost"
                  id="cumulativecost"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Save
            </button>
          </form >
        </div >
      )}
    </>
  );
};

export default Page;
