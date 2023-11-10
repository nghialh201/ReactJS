import React, { Component } from "react";
import ReactDOM from "react-dom";
import DanhSachSanPham from "./components/DanhSachSP";
import "semantic-ui-css/semantic.min.css";
import ThongTinMuaHang from "./components/ThongTinMuaHang";
import { Button } from "semantic-ui-react";
//some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      cart: [],
      price: 0,
    };
  }

  handlePrice = () => {
    let ans = 0;
    this.state.cart.map((item) => (ans += item.amount * item.price));
    this.setState({ price: ans });
  };

  handleClick = async (item) => {
    // this.state.cart.map((product) => {
    for (const product of this.state.cart) {
      if (item === product) {
        return;
      }
    }
    // });
    await this.setState({ cart: [...this.state.cart, item] });
    await this.handlePrice();
  };

  handleChange = async (item, d) => {
    let ind = -1;
    this.state.cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = this.state.cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    this.setState({ cart: [...tempArr] });

    this.handlePrice();
  };
  render() {
    return (
      <div
        style={{
          paddingBottom: "50px",
        }}
      >
        <DanhSachSanPham handleClick={this.handleClick}></DanhSachSanPham>
        <ThongTinMuaHang
          cart={this.state.cart}
          setCart={(arr) => this.setState({ cart: arr })}
          handleChange={this.handleChange}
          handlePrice={this.handlePrice}
          price={this.state.price}
        ></ThongTinMuaHang>
        <Button
          floated="right"
          style={{
            marginTop: "10px",
            marginRight: "10%",
          }}
        >
          Xác nhận mua hàng
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.querySelector("#root"));
