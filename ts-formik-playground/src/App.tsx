import "./App.css";
import {
  Field,
  FieldArray,
  FieldAttributes,
  Form,
  Formik,
  useField,
} from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
} from "@mui/material";
import * as yup from "yup";

type MyRadioProps = { label: string } & FieldAttributes<{}>;

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField(props);

  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  firstName: yup.string().required().max(10),
  pets: yup.array().of(
    yup.object({
      name: yup.string().required(),
    })
  ),
});
function App() {
  return (
    <Formik
      initialValues={{
        firstName: "Thulani",
        lastName: "Fikasentani",
        isTall: false,
        cookies: [],
        yoghurt: [],
        pets: [{ type: "snake", name: "Ekans", id: "" + Math.random() }],
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        //make async call
        console.log(data);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form>
          {/* <Field name="firstName" type="input" as{TextField} /> */}
          <MyTextField
            placeholder="first name"
            name="firstName"
            type="input"
            as={TextField}
          />
          <MyTextField
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

          <MyRadio name="yoghurt" type="radio" value="peach" label="Peach" />
          <MyRadio
            name="yoghurt"
            type="radio"
            value="granadilla"
            label="Granadilla"
          />
          <MyRadio name="yoghurt" type="radio" value="plain" label="Plain" />
          <FieldArray name="pets">
            {(arrayHelpers) => (
              <div>
                <Button
                  onClick={() =>
                    arrayHelpers.push({
                      type: "frog",
                      name: "",
                      id: "" + Math.random(),
                    })
                  }
                >
                  Add Pet
                </Button>
                {values.pets.map((pet, index) => {
                  return (
                    <div key={pet.id}>
                      <MyTextField
                        placeholder="pet name"
                        name={`pets.${index}.name`}
                      />
                      <Field
                        name={`pets.${index}.type`}
                        type="select"
                        as={Select}
                      >
                        <MenuItem value="snake">Snake</MenuItem>
                        <MenuItem value="bat">Bat</MenuItem>
                        <MenuItem value="frog">Frog</MenuItem>
                      </Field>
                      <Button onClick={() => arrayHelpers.remove(index)}>
                        X
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </FieldArray>
          <div>
            <Button disabled={isSubmitting} type="submit">
              Submit
            </Button>
          </div>

          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}

export default App;
