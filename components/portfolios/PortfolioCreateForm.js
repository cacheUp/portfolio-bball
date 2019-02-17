import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validateInputes = validate => {
  let errors = {};
  // if (!values.email) {
  //   errors.email = "Required";
  // } else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  // ) {
  //   errors.email = "Invalid email address";
  // }
  // return errors;
};

const INITIAL_VALUES = {
  title: "",
  company: "",
  location: "",
  position: "",
  description: "",
  startDate: "",
  endDate: ""
};

const PortfolioCreateForm = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={INITIAL_VALUES}
      // validate={
      //   }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>

          <div>
            <label>Companey</label>
            <Field type="text" name="company" />
            <ErrorMessage name="company" component="div" />
          </div>

          <div>
            <label>Location</label>
            <Field type="text" name="location" />
            <ErrorMessage name="location" component="div" />
          </div>

          <div>
            <label>Position</label>
            <Field type="text" name="postition" />
            <ErrorMessage name="position" component="div" />
          </div>

          <div>
            <label>Description</label>
            <Field type="textarea" name="description" component="textarea" />
            <ErrorMessage name="description" component="div" />
          </div>

          <div>
            <label>Start Date</label>
            <Field type="text" name="startDate" />
            <ErrorMessage name="startDate" component="div" />
          </div>

          <div>
            <label>End Date</label>
            <Field type="text" name="endDate" />
            <ErrorMessage name="endDate" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;
