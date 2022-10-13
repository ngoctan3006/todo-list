import React from 'react';
import './form.css';

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label>Task Title</label>
        <input className="form-control" type="text" placeholder="Task Title" />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          placeholder="Enter description"
          cols="30"
          rows="2"
        ></textarea>
      </div>
      <div className="row">
        <div className="half">
          <div className="form-group">
            <label>Due Date</label>
            <input className="form-control" type="date" name="" id="" />
          </div>
        </div>
        <div className="half">
          <div className="form-group">
            <label>Priority</label>
            <select name="" id="" className="form-control">
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
      </div>
      <button className="btn btn-success mt-1 full" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
