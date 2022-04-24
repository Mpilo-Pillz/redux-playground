import "./App.css";
import { Field, Form, Formik } from "formik";

function App() {
  return (
    <Formik
      initialValues={{
        firstName: "Thulani",
        lastName: "Fikasentani",
        isTall: false,
        cookies: [],
        yoghurt: [],
      }}
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
          {/* <Field name="firstName" type="input" as{TextField} /> */}
          <Field placeholder="first name" name="firstName" type="input" />
          <Field placeholder="last name" name="lastName" type="input" />
          <Field name="isTall" type="checkbox" />
          <div>cookies:</div>
          <Field name="cookies" type="checkbox" value="chocolate chip" />
          <Field name="cookies" type="checkbox" value="oreo" />
          <Field name="cookies" type="checkbox" value="tennis" />
          <div>yoghurt</div>
          <Field name="yoghurt" type="radio" value="peach" />
          <Field name="yoghurt" type="radio" value="granadilla" />
          <Field name="yoghurt" type="radio" value="plain" />
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
