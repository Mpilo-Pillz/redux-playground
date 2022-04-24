import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Formik } from "formik";

function App() {
  return (
    <Formik
      initialValues={{ firstName: "Thulani", lastName: "Fikasentani" }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        //make async call
        console.log(data);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div>
            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    </Formik>
  );
}

export default App;
