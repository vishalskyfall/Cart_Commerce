import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './styles';


// const products = [
//   {
//     id: 1,
//     name: "Helmet",
//     description: "f1 (Danny Ric) helmet.",
//     price: "$5000",
//     image:'https://preview.redd.it/h9oomhieyk081.jpg?width=1440&format=pjpg&auto=webp&s=fb61afa0103b00fa213889f4ca6ee2fbaab114e5'
//   },
//   {
//     id: 2,
//     name: "Helmet",
//     description: "MotoGP (Marc M) helmet.",
//     price: "$1000",
//     image:'https://cdn.shopify.com/s/files/1/0076/8301/4754/products/shoei_x14_marquez4_helmet_red_black_750x750_11fa9b8e-21ae-4d5b-bd35-b2d57bac2d37.jpg?v=1543457957'
//   },
// ]; //faking data before using api

const Products = ({products,onAddToCart,viewItem}) => {
    const classes=useStyles();
  return (
    <main className={classes.content}> 
    <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} viewItem={viewItem}/>
            
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
