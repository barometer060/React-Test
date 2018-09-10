import React, { Component } from "react";
import "./InputForm.css";

class InputForm extends Component {
  state = {
    id: "",
    name: "",
    department: "",
    salary: "",
    errorId: "",
    errorName: "",
    errorDept: "",
    errorSalary: ""
  };

  handleID = e => {
    if (e.target.value === "") {
      this.setState({ errorId: "ID is required" });
      return;
    } else {
      this.setState({ errorId: "" });
    }
  };

  setID = e => {
    this.setState({ id: e.target.value });
  };

  handleName = e => {
    if (e.target.value === "") {
      this.setState({ errorName: "Name is required" });
      return;
    } else {
      this.setState({ errorName: "" });
    }
  };

  setName = e => {
    this.setState({ name: e.target.value });
  };

  handleDept = e => {
    if (e.target.value === "") {
      this.setState({ errorDept: "Department is required" });
      return;
    } else {
      this.setState({ errorDept: "" });
    }
  };

  setDept = e => {
    this.setState({ department: e.target.value });
  };

  handleSalary = e => {
    if (e.target.value === "") {
      this.setState({ errorSalary: "Salary is required" });
      return;
    } else {
      this.setState({ errorSalary: "" });
    }
  };

  setSalary = e => {
    this.setState({ salary: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="card mx-auto">
          <div className="card-header text-center">
            <h2>Add Employee</h2>
          </div>
          <div className="card-body">
            <form className="form">
              <div className="form-group">
                <label>ID</label>
                <input
                  type="text"
                  className="form-control"
                  onBlur={this.handleID}
                  onChange={this.setID}
                  value={this.state.id}
                />
                <div className="error">{this.state.errorId}</div>
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  onBlur={this.handleName}
                  onChange={this.setName}
                  value={this.state.name}
                />
                <div className="error">{this.state.errorName}</div>
              </div>
              <div className="form-group">
                <label>Department</label>
                <input
                  type="text"
                  className="form-control"
                  onBlur={this.handleDept}
                  onChange={this.setDept}
                  value={this.state.department}
                />
                <div className="error">{this.state.errorDept}</div>
              </div>
              <div className="form-group">
                <label>Salary</label>
                <input
                  type="text"
                  className="form-control"
                  onBlur={this.handleSalary}
                  onChange={this.setSalary}
                  value={this.state.salary}
                />
                <div className="error">{this.state.errorSalary}</div>
                <button className="btn btn-primary mt-4" type="button">
                  Add Employee
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer text-center">
            <p>
              Fields marked with <span className="text-danger">*</span> are
              required
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InputForm;
