import React from "react";

export const Container = (props: JSX.ElementChildrenAttribute): JSX.Element => {
  return <div className="container">{props.children}</div>;
};
