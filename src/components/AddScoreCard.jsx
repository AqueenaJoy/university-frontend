import axios from 'axios'
import React, { useState } from 'react'

const AddScoreCard = () => {
  const [input, changeInput] = useState({
    name: "",
    regno: "",
    admno: "",
    college: "",
    email: "",
    adbms: "",
    acn: "",
    ase: "",
    dfca: ""
  });

  const [output, changeOutput] = useState({
    name: "",
    regno: "",
    admno: "",
    college: "",
    email: "",
    adbms: "",
    acn: "",
    ase: "",
    dfca: "",
    total: "",
    status: ""
  });

  const inputHandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value });
  };

  const readValues = () => {
    console.log(input);
    axios.post("http://localhost:4001/score", input)
      .then((response) => {
        changeOutput(response.data.result);
        console.log("success");
      })
      .catch();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <h1>University Score Card</h1>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Register Number</label>
              <input type="text" className="form-control" name='regno' value={input.regno} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Admission Number</label>
              <input type="text" className="form-control" name='admno' value={input.admno} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">College</label>
              <input type="text" className="form-control" name='college' value={input.college} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Email</label>
              <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">ADBMS</label>
              <input type="number" className="form-control" name='adbms' value={input.adbms} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">ACN</label>
              <input type="number" className="form-control" name='acn' value={input.acn} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">ASE</label>
              <input type="number" className="form-control" name='ase' value={input.ase} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">DFCA</label>
              <input type="number" className="form-control" name='dfca' value={input.dfca} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button className="btn btn-success" onClick={readValues}>Submit</button>
            </div>

            {output.name && (
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card bg-light text-black,">
                    <h1>KTU SCORE CARD</h1>
                  <div className="card-body">
                    <h5 className="card-title">Name: {output.name}</h5>
                    <h5 className="card-title">Register Number: {output.regno}</h5>
                    <h5 className="card-title">Admission Number: {output.admno}</h5>
                    <h5 className="card-title">College: {output.college}</h5>
                    <h5 className="card-title">Email: {output.email}</h5>
                    <h5 className="card-title">ADBMS: {output.adbms}/100</h5>
                    <h5 className="card-title">ACN: {output.acn}/100</h5>
                    <h5 className="card-title">ASE: {output.ase}/100</h5>
                    <h5 className="card-title">DFCA: {output.dfca}/100</h5>
                    <h5 className="card-title">Total: {output.total}/400</h5>
                    <h5 className="card-title">
                      Status:
                      <span className={output.status === "Pass" ? "text-success" : "text-danger"}>
                        {output.status}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScoreCard;
