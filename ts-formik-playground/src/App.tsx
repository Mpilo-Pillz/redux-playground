import "./App.css";
import { Field, Form, Formik } from "formik";

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
      {({ values, isSubmitting }) => (
        <Form>
          <Field placeHolder="first name" name="firstName" type="input" />
          <Field placeholder="last name" name="lastName" type="input" />
          {/* <Field name="firstName" type="input" as{TextField} /> */}
          <div>
            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}

export default App;
