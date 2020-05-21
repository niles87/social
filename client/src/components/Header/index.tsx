import React from "react";

export function Header(props: any) {
  return <div>{props.children}</div>;
}

export function List() {
  return (
    <ul>
      <li>
        <button onClick={(e) => console.log("Home")}>Home</button>
      </li>
      <li>
        <button onClick={(e) => console.log("upload")}>Upload</button>
      </li>
    </ul>
  );
}

export function Title() {
  return <h2>Social</h2>;
}
