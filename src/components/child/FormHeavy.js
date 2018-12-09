import React from "react";
import { Field } from "formik";
import { FormText } from "./form";
export default function FormHeavy(props) {
  const { name, title, value, placeholder } = props;
  return (
    <div className="uk-margin uk-flex uk-flex-left uk-flex-middle uk-flex-between">
      <label className="uk-form-label">{props.title}</label>
      <div className="uk-form-controls">
        <Field
          name={name}
          style={{
            width:
              value[name].length > 0 ? value[name].length + 4 + "ch" : "100%"
          }}
          placeholder={placeholder ? placeholder : title}
          className="uk-form-blank uk-text-right"
          component={FormText}
        />
      </div>
    </div>
  );
}
