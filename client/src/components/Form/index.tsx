import React from "react";

export const Form = (props: any) => {
  return <form {...props}>{props.children}</form>;
};

export const FormLabel = (props: any) => {
  return <label>{props.children}</label>;
};

export const FormInputs = (props: any) => {
  return <input {...props} />;
};

export const Button = (props: any) => {
  return <button {...props}>{props.children}</button>;
};
