import React from "react";
import "./Friends.css";
import axios from "axios";
import { render } from "react-dom";
import { withFormik, Form, Field } from "formik";



export default class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      age: null,
      email: "",
      phone: null,
      id: null,
      update: false,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <React.Fragment>
      <div className="people">
        {this.state.friends &&
          this.state.friends.map(e => {
            return (
              <div key={e.id} className="people">
                <div>
                  {e.name}, {e.age}, {e.email}, {e.phone}
                </div>
              </div>

              <Form>
                <div className="field">
                  <div className="control">
                    <label className="label">Name</label>
                    {touched.fullname && errors.fullname && <p>{errors.fullname}</p>}
                    <Field
                      className="input"
                      type="text"
                      name="fullname"
                      placeholder="Name"
                    />
                  </div>
                </div>
                               <div className="field">
                  <div className="control">
                    <label className="label">Age</label>
                    {touched.age && errors.age && <p>{errors.age}</p>}
                    <Field
                      className="input"
                      type="age"
                      name="age"
                      placeholder="Age"
                    />
                  </div>
                  </div>
                <div className="field">
                  <div className="control">
                    <label className="label">Email Address</label>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                  <div className="field">
                  <div className="control">
                    <label className="label">Phone</label>
                    {touched.phone && errors.phone && <p>{errors.phone}</p>}
                    <Field
                      className="input"
                      type="phone"
                      name="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>
        
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            );
          })}
      </div> </React.Fragment>
    );
  }
}