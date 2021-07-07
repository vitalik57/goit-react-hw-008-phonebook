import * as Yup from "yup";
export const Schema = Yup.object().shape({
  email: Yup.string().email("@email").required("Field is Required!"),
  password: Yup.string()
    .required("Field is Required")
    .min(6, "min-6 simbols")
    .max(12, "max-12 simbols"),
});
