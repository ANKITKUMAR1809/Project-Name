import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './css/EmailBody.css';

const EmailBody = () => {
  const [form, setForm] = useState({
    subject: "",
    hc: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form Submitted:', form);
  };

  return (
    <>
      <Sidebar />
      <div className='selected-content'>
        <div>
          <div className="email-body-heading">
            <h1>Email Template Editor</h1>
            <button className='btn' onClick={handleSubmit}>Save Changes</button>
          </div>
          <form className='email-body-form'>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleOnChange}
              />
            </div>
            <div className='email-body-form-row'>
              <div>
                <label htmlFor="hc">HTML Content</label>
                <textarea
                  name="hc"
                  id="hc"
                  rows={10}
                  value={form.hc}
                  onChange={handleOnChange}
                ></textarea>
              </div>
              <div>
                <label htmlFor="preview">Preview</label>
                <textarea
                  name="preview"
                  id="preview"
                  rows={10}
                  value={form.hc}
                  readOnly
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailBody;
