import React from "react";
const FormText = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, isSubmitting }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const { className, ...rest } = props;
  return (
    <div
      style={{ padding: "0px 10px" }}
      className={`uk-flex uk-flex-column ${props.width ? props.width : ""}`}
    >
      <input
        type="text"
        className={`${className} uk-input uk-width-1-1 ${errors[field.name] &&
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
    <div
      uk-form-custom={
        props.transparent
          ? props.transparent
          : "target: > * > span:first-child "
      }
      style={{ padding: "0px 5px" }}
      className={`uk-flex uk-flex-column ${props.width ? props.width : ""}`}
    >
      <select {...field} {...props} className="uk-width-1-1">
        {props.children}
      </select>
      {props.transparent ? (
        <span />
      ) : (
        <button
          className="uk-button uk-button-default uk-width-1-1"
          type="button"
        >
          <span />
          <span uk-icon="icon: chevron-down" />
        </button>
      )}
      {touched[field.name] && errors[field.name] && (
        <span className="uk-label uk-label-danger">{errors[field.name]}</span>
      )}
    </div>
  );
};
export { FormText, FormSelect };
