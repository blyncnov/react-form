import React from "react";

import "./react-form.scss";

const Form = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();

    const FirstName = e.target.firstname.value;
    const LastName = e.target.lastName.value;
    const MiddleName = e.target.middleName.value;
    const Email = e.target.email.value;
    const Phone = e.target.phone.value;
    const Dob = e.target.dob.value;
    const Nimc = e.target.nimc.value;

    console.log(
      "Form Submitted with the following Information:" + FirstName,
      LastName,
      MiddleName,
      Email,
      Phone,
      Dob,
      Nimc
    );

    alert(
      `Form Submitted with the following Information: \n\n First Name: ${FirstName} \n Last Name: ${LastName}\n Middle Name: ${MiddleName}\n Email: ${Email} \n Phone Number: ${Phone}\n Date Of Birth: ${Dob}\n NIMC: ${Nimc}`
    );
  };

  return (
    <div className="react-form-section">
      <div className="react-form-container">
        <div className="react-form-divider">
          <div className="welcome-text">
            <h1>Welcome to React - Form</h1>
          </div>
        </div>
        <div className="react-form-divider">
          <form id="form" onSubmit={SubmitHandler}>
            <p>NIMC data collection</p>
            <div className="form-input">
              <label htmlFor="first-name">First Name:</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                onChange={(e) => e.target.value}
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="first-name">Last Name:</label>
              <input
                type="text"
                name="lastName"
                onChange={(e) => e.target.value}
                id="lastName"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="first-name">Middle Name:</label>
              <input
                type="text"
                name="middleName"
                onChange={(e) => e.target.value}
                id="middleName"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="first-name">Email Address:</label>
              <input
                type="text"
                name="email"
                onChange={(e) => e.target.value}
                id="email"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="number"
                name="phone"
                onChange={(e) => e.target.value}
                id="phone"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="first-name">Date Of Birth</label>
              <input
                type="date"
                name="dob"
                onChange={(e) => e.target.value}
                id="first-name"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="first-name">NIMC Number</label>
              <input
                type="number"
                name="nimc"
                onChange={(e) => e.target.value}
                id="nimc"
                required
              />
            </div>
            <div className="form-input">
              <button type="submit">Submission</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
