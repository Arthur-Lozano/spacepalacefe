
import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import styles from "../contact/contact.css";

import 'bootstrap/dist/css/bootstrap.min.css';


import ContactBanner from '../../components/ContactBanner.js'

// import styles from '../contact/contact.css';
const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [result, setResult] = useState(null);

  const sendEmail = (event) => {

    event.preventDefault();
    axios
      .post("https://spacepalacedb.herokuapp.com/send", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later",
        });
      });
  };

  const onInputChange = (event) => {

    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div>
      <ContactBanner />
      {result && (
        <p className={`${result.success ? "success" : "error"}`}>
          {result.message}
        </p>
      )}
      <div className={'container'}>
        <form className={'inputform'} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={state.name}
              placeholder="Enter your full name"
              onChange={onInputChange}
            />
            <Form.Text className='text-muted'>We will keep your email secure</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={state.email}
              placeholder="Enter your email"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={state.subject}
              placeholder="Enter subject"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={state.message}
              rows="3"
              placeholder="Enter your message"
              onChange={onInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
