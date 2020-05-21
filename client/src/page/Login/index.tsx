import React, { useState, Fragment } from "react";
import { Form, FormInputs, Button, FormLabel } from "../../components/Form";
import { Header, Title } from "../../components/Header";

export const Login = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e: Event) => {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      <Header>
        <Title />
      </Header>
      <Form className="login" onSubmit={onLogin}>
        <h3>Login</h3>
        <div>
          <FormLabel>Name: </FormLabel>
          <FormInputs
            type="text"
            name="name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>
        <div>
          <FormLabel>Email: </FormLabel>
          <FormInputs
            type="email"
            name="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <FormLabel>Password: </FormLabel>
          <FormInputs
            type="password"
            name="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Login</Button>
      </Form>
    </Fragment>
  );
};
