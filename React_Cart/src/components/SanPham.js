import React from "react";
import { Card, Image, Grid, Button, Form } from "semantic-ui-react";

const SanPham = (props) => {
  return (
    <Form>
      <Grid.Column>
        <Card style={{ margin: "10px" }}>
          <Card.Content>
            <Card.Header>{props.data.name}</Card.Header>
            <Image
              src={props.data.img}
              style={{ width: "200px", height: "200px" }}
              centered
            ></Image>
            <Card.Description style={{ marginTop: "10px" }}>
              {props.data.price} đồng
            </Card.Description>
          </Card.Content>
          <Button
            primary
            style={{
              width: "100px",
              height: "30px",
              marginBottom: "10px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onClick={() => {
              props.handleClick(props.data);
              // props.handlePrice();
            }}
          >
            Mua
          </Button>
        </Card>
      </Grid.Column>
    </Form>
  );
};

export default SanPham;
