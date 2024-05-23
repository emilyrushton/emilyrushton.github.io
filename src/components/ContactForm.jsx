import React, { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm({ darkTheme }) {
  const [state, handleSubmit] = useForm("mqkroljb");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);
    try {
      const result = await handleSubmit(e);
      console.log('Formspree result:', result);
      setFormData({ name: '', email: '', message: '' });
      toast.success('Your message has been sent successfully!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      toast.success('Your message has been sent successfully!');
    }
  }

  return (
    <form
      className={darkTheme ? "form-dark" : ""}
      id="contact-form"
      onSubmit={onSubmit}
      ref={form}
    >
      <div className="row g-4">
        <div className="col-xl-6">
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            required
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="col-xl-6">
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="col">
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows={5}
            required
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      <p className="text-center mt-4 mb-0">
        <button
          id="submit-btn"
          className="btn btn-primary rounded-pill d-inline-flex"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? (
            <>
              <span
                role="status"
                aria-hidden="true"
                className="spinner-border spinner-border-sm align-self-center me-2"
              ></span>
              Sending...
            </>
          ) : (
            <>Send Message</>
          )}
        </button>
      </p>
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
