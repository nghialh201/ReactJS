import React from "react";
import SanPham from "./SanPham";
import data from "../data/data";
import { Grid } from "semantic-ui-react";

const DanhSachSanPham = ({ handleClick }) => {
  return (
    <Grid container textAlign="center" divided="vertically">
      <Grid.Row columns={3}>
        {data.map((item, index) => {
          return (
            <SanPham
              data={item}
              key={index}
              handleClick={handleClick}
              // handlePrice={handlePrice}
            ></SanPham>
          );
        })}
      </Grid.Row>
    </Grid>
  );
};

export default DanhSachSanPham;
