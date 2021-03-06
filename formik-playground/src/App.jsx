import { useState } from 'react'
import './App.css'
import { Formik, Field, FormikContextType } from 'formik';
import {Button, TextField } from "@material-ui/core";

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
          <Form>
            <div>
            <Field placeholder="firstName" name="firstName" type="input" as={TextField} />
            </div>
            <div>
            <Field placeholder="lastName"name="lastName" type="input" as={TextField} />
            </div>
            <div>
            <Button disabled={isSubmitting} type="submit">Submit</Button>
            </div>
            <pre>
              {JSON.stringify(values, null, 2)}
            </pre>
            
          </Form>
        )
      }
    </Formik>
  </>
  )
}

export default App
