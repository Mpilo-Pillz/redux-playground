import { Field, FieldAttributes, Form, Formik, useField } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";

type MyRadioProps = { label: string } & FieldAttributes<{}>;

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField(props);

  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};
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
          <Field
            placeholder="first name"
            name="firstName"
            type="input"
            as={TextField}
          />
          <Field
            placeholder="last name"
            name="lastName"
            type="input"
            as={TextField}
          />
          <Field name="isTall" type="checkbox" />
          <div>cookies:</div>
          <Field
            name="cookies"
            type="checkbox"
            value="chocolate chip"
            as={Checkbox}
          />
          <Field name="cookies" type="checkbox" value="oreo" as={Checkbox} />
          <Field name="cookies" type="checkbox" value="tennis" as={Checkbox} />
          <div>yoghurt</div>
          <Field name="yoghurt" type="radio" value="peach" as={Radio} />
          <Field name="yoghurt" type="radio" value="granadilla" as={Radio} />
          <Field name="yoghurt" type="radio" value="plain" as={Radio} />
          <div>
            <Button disabled={isSubmitting} type="submit">
              Submit
            </Button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}

export default App;
