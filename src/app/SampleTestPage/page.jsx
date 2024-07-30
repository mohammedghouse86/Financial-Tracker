"use client";
import React, { useState } from "react";
import "./SamplePage.css"; // Import your CSS file

const SamplePage = () => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    gender: "",
  });
  const [tax,setTax] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setDetails({
      firstname: data.firstname || "",
      lastname: data.lastname || "",
      age: data.age || "",
      gender: data.gender || "", // Note: The select field's name is "gender"
    });

    console.log(details);
  };

  const handleClear = () => {
    setDetails({
      firstname: "",
      lastname: "",
      gender: "",
    });

    // Reset form fields
    document.querySelector("form").reset();
  };

  const handelTax = async (e) => {
      e.preventDefault();
      
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      console.log(data.income);
    
      const apiURL = "http://localhost:3000/pages/api/test/calculation";
            
      try {
        const response = await fetch(apiURL, {
          method: "POST", // Use POST method
          /*headers: {
            "Content-Type": "application/json", // Specify the content type
          },*/
          body: JSON.stringify({income:data.income}) // Convert to JSON
          
        });
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response}`); // Detailed error message
        }
        const result = await response.json();
        console.log(result); // Handle the result (e.g., { tax: 3000 })
        setTax(result.tax)
      } catch (error) {
        console.error('Error:', error); // Handle errors
      }
    };
    
  

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="form-container">
          <h1 className="form-title">Information Detail Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="firstname"
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="lastname"
              />
            </div>
            <div className="form-field">
              <label htmlFor="age">Age</label>
              <div>
                <input type="number" id="age" placeholder="age" name="age" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="options">Gender</label>
              <select id="options" name="gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Retard">Retard</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Submit Form
            </button>
            <button
              type="button"
              className="mx-1 reset-button"
              onClick={handleClear}
            >
              Clear Form
            </button>
          </form>
        </div>

        {details.firstname && (
          <div>
            <div className="form-container mx-5">
              <h1 className="form-title">Details</h1>
              <div className="display my-5">{details.firstname}</div>
              <div className="display my-5">{details.lastname}</div>
              <div className="display my-5">{details.age}</div>
              <div className="display my-5">{details.gender}</div>
            </div>
          </div>
        )}

        <div className="form-container mx-5">
        <h1 className="form-title">Calculate your tax</h1>
        <form onSubmit={handelTax}>
          <label htmlFor="income">Income</label>
          <div>
            <input
              type="number"
              id="income"
              placeholder="ENTER your income"
              name="income"
            />
          </div>
          <button type="submit" className="mx-1 reset-button">
            Calculate Tax
          </button>
        </form>
        {tax && 
          <h1 className="form-title"> this is your tax {tax}</h1>
          }</div>
      </div>
    </>
  );
};

export default SamplePage;
