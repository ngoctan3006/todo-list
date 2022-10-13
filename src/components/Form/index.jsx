import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import './form.css';

const Form = ({ task, type, onSubmit }) => {
  const [data, setData] = useState({ ...task });

  useEffect(() => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    $('#date_picker').attr('min', today);
  }, []);

  const handleChange = (e) =>
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const submit = (e) => {
    e.preventDefault();
    onSubmit(data);
    if (type === 'Add') setData({ ...task });
    else setData({ ...data });
  };

  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label>Task Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={data?.title}
          onChange={handleChange}
          placeholder="Task Title"
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          placeholder="Enter description"
          name="description"
          value={data?.description}
          onChange={handleChange}
          cols="30"
          rows="2"
        />
      </div>
      <div className="row">
        <div className="half">
          <div className="form-group">
            <label>Due Date</label>
            <input
              className="form-control"
              type="date"
              name="due"
              value={data.due}
              onChange={handleChange}
              id="date_picker"
            />
          </div>
        </div>
        <div className="half">
          <div className="form-group">
            <label>Priority</label>
            <select
              className="form-control"
              name="priority"
              value={data.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      <button className="btn btn-success mt-1 full" type="submit">
        {type}
      </button>
    </form>
  );
};

export default Form;
