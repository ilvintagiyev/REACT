import * as React from "react";
import { FormControl, useFormControlContext } from "@mui/base/FormControl";
import { Input, inputClasses } from "@mui/base/Input";
import { styled } from "@mui/system";
import clsx from "clsx";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AddCountry() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .required("Required"),
    surname: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    age: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    year: Yup.string()
      .min(4, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      year: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema:  SignupSchema ,
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <FormControl defaultValue="" >
            <Label>Name</Label>
            <StyledInput
              placeholder="Write your name here"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <HelperText />
          </FormControl>
          {formik.errors.name && formik.touched.name && (
            <div style={{color:"red"}} id="feedback">{formik.errors.name}</div>
          )}
          <FormControl defaultValue="" >
            <Label>Surname</Label>
            <StyledInput
              placeholder="Write your surname here"
              name="surname"
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
            <HelperText />
          </FormControl>
          {formik.errors.surname && formik.touched.surname && (
            <div style={{color:"red"}} id="feedback">{formik.errors.surname}</div>
          )}
          <FormControl defaultValue="" >
            <Label>age</Label>
            <StyledInput
              placeholder="Write your age here"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            <HelperText />
          </FormControl>
          {formik.errors.age && formik.touched.age && (
            <div style={{color:"red"}} id="feedback">{formik.errors.age}</div>
          )}
          <FormControl defaultValue="" >
            <Label>born</Label>
            <StyledInput
              name="year"
              placeholder="Write your born here"
              onChange={formik.handleChange}
              value={formik.values.year}
            />
            <HelperText />
          </FormControl>
          {formik.errors.year && formik.touched.year && (
            <div style={{color:"red"}} id="feedback">{formik.errors.year}</div>
          )}
          <Button variant="contained" type="submit">
            Add
          </Button>
        </form>
      </div>
    </>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }
  }
`
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? "invalid" : "")}>
      {children}
      {required ? " *" : ""}
    </p>
  );
})`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};
