import { useState } from 'react'
import './App.css'
import { Formik } from 'formik';
import {Button, TextField, Field } from "@material-ui/core";

function App() {
 

  return (
  <>
    <Formik initialValues={{firstName: 'Mpilo', lastName: 'Pillz'}} onSubmit={(data, {setSubmitting, resetForm}) => {
      setSubmitting(true)
      console.log("formik-->",data)
      setSubmitting(false)
      resetForm()
    }}>
      {
        ({values, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" type="input" as={TextField}/>
            <TextField name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur}/>
            <Field name="lastName" type="input" />
            <TextField name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
            <div>
            <Button disabled={isSubmitting} type="submit">Submit</Button>
            </div>
            <pre>
              {JSON.stringify(values, null, 2)}
            </pre>
            
          </form>
        )
      }
    </Formik>
  </>
  )
}

export default App
