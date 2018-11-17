import React from "react";
const FormText = ({
  field, // { name, value, onChange, onBlur }
  form: {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const { className, ...rest } = props;
  return (
    <div>
      <input
        type="text"
        className={`${className} uk-input uk-width-expand ${errors[
          field.name
        ] &&
          touched[field.name] &&
          "uk-form-danger"}`}
        disabled={isSubmitting}
        {...field}
        {...rest}
      />
      {touched[field.name] && errors[field.name] && (
        <span className="uk-label uk-label-danger">{errors[field.name]}</span>
      )}
    </div>
  );
};

const FormSelect = ({
  field, // { name, value, onChange, onBlur }
  form: {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <div uk-form-custom="target: > * > span:first-child">
      <select {...field} {...props}>
        {props.children}
      </select>
      <button className="uk-button uk-button-default" type="button">
        <span />
        <span uk-icon="icon: chevron-down" />
      </button>
      {touched[field.name] && errors[field.name] && (
        <span className="uk-label uk-label-danger uk-margin-left">
          {errors[field.name]}
        </span>
      )}
    </div>
  );
};
export { FormText, FormSelect };
