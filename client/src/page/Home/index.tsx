import React, { useState, Fragment } from "react";
import { Button, Form, FormLabel, FormInputs } from "../../components/Form";
import { Header, Title } from "../../components/Header";
import { Container } from "../../components/Container";
import { Img } from "../../components/Img";

export const Home = (): JSX.Element => {
  const [image, setImage] = useState();
  const [imageArr, setImageArr] = useState([]);
  return (
    <Fragment>
      <Header>
        <Title />
      </Header>
      <Form encType="multipart/form-data">
        <h3>Upload an Image</h3>
        <div>
          <FormLabel>Image: </FormLabel>
          <FormInputs
            type="file"
            name="image"
            value={image}
            onChange={(e: any) => setImage(e.target.value)}
          />
        </div>
        <br />
        <Button type="submit">Submit</Button>
      </Form>
      <Container>
        {imageArr.length === 0
          ? "Upload an image!"
          : imageArr.map((image) => <Img key={image.id} src={image.src} alt={image.alt} />)}
      </Container>
    </Fragment>
  );
};
