import React, { Component } from "react";

class InputForm extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>Add Employee</h2>
          </div>
          <div className="card-body">
            <form className="form">
              <div className="form-group">
                <label>ID</label>
                <input type="text" className="form-control" />
                {/* <div className="erro"></div> */}
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" />
                {/* <div className="erro"></div> */}
              </div>
              <div className="form-group">
                <label>Department</label>
                <input type="text" className="form-control" />
                {/* <div className="erro"></div> */}
              </div>
              <div className="form-group">
                <label>Salary</label>
                <input type="text" className="form-control" />
                {/* <div className="erro"></div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default InputForm;
