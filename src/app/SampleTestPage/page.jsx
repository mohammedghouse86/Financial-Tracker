'use client';
import React, { useState } from 'react';
import './SamplePage.css'; // Import your CSS file

const SamplePage = () => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    gender: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setDetails({
      firstname: data.firstname || "",
      lastname: data.lastname || "",
      gender: data.gender || "" // Note: The select field's name is "gender"
    });

    console.log(data);
  };

  const handleClear = () => {
    setDetails({
      firstname: "",
      lastname: "",
      gender: ""
    });

    // Reset form fields
    document.querySelector('form').reset();
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="form-container">
          <h1 className="form-title">Information Detail Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor='firstname'>First Name</label>
              <input type='text' id='firstname' name='firstname' placeholder='firstname' />
            </div>
            <div className="form-field">
              <label htmlFor='lastname'>Last Name</label>
              <input type='text' id='lastname' name='lastname' placeholder='lastname' />
            </div>
            <div className="form-field">
              <label htmlFor='age'>Age</label>
              <div><input type='number' id='age' placeholder='age' name='age' /></div>
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
            <button type='submit' className="submit-button">Submit Form</button>
            <button type='button' className="mx-1 reset-button" onClick={handleClear}>Clear Form</button>
          </form>
        </div>

        {details.firstname && <div>
          <div className="form-container mx-5">
            <div className="display my-5">{details.firstname}</div>
            <div className="display my-5">{details.lastname}</div>
            <div className="display my-5">{details.age}</div>
            <div className="display my-5">{details.gender}</div>
          </div>
        </div>}
      </div>
    </>
  );
};

export default SamplePage;
