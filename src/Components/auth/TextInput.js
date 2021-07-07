import React from "react";
import { useField } from "formik";
import { TextInputStyled } from "./TextInputStyled";
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextInputStyled>
        {label}
        <input {...field} {...props} />
      </TextInputStyled>
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </>
  );
};

export default TextInput;
