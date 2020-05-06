import * as Yup from "yup";

const registerValidationSchema = Yup.object().shape({
    first_name: Yup.string()
    .required("Please enter your name"),
  email: Yup.string()
    .matches(
      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/,
      "Must input a valid email"
    )
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "The password needs to be 8 characters long")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      "Must contain a capital letter, a lowercase letter, and a number"
    )
    .required("Please enter your password"),
});

export { registerValidationSchema };