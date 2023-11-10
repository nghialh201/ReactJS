import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";

class ThongTinMuaHang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0,
    };
  }

  handleRemove = async (id) => {
    const arr = this.props.cart.filter((item) => item.id !== id);
    await this.props.cart.map((item) => {
      if (item.id === id) {
        item.amount = 1;
      }
    });
    await this.props.setCart(arr);
    await this.props.handlePrice();
  };

  render() {
    if (this.props.cart.length !== 0) {
      return (
        <Table textAlign="center" style={{ width: "80%", margin: "auto" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>STT</Table.HeaderCell>
              <Table.HeaderCell>Mặt hàng</Table.HeaderCell>
              <Table.HeaderCell>SL</Table.HeaderCell>
              <Table.HeaderCell>Thành tiền</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.cart.map((item, index) => {
              return (
                <Table.Row>
                  <Table.Cell>{index}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        this.props.handleChange(item, +1);
                      }}
                      icon="plus"
                      style={{ marginRignt: "5px" }}
                      size="mini"
                    ></Button>
                    {item.amount}
                    <Button
                      onClick={() => {
                        this.props.handleChange(item, -1);
                      }}
                      icon="minus"
                      style={{ marginLeft: "5px" }}
                      size="mini"
                    ></Button>
                  </Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        this.handleRemove(item.id);
                      }}
                    >
                      Xóa
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>Tổng tiền: </Table.Cell>
              <Table.Cell>{this.props.price}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
    } else {
      return (
        <h3
          style={{
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Chưa có thông tin thanh toán
        </h3>
      );
    }
  }
}

export default ThongTinMuaHang;
