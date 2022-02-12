import React from "react";
import useStyles from "./styles";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const ViewItem = ({viewItem, products, onAddToCart }) => {
  console.log(viewItem);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={viewItem.image.url}
        title={viewItem.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {viewItem.name}
          </Typography>
          <Typography variant="h6">
            {viewItem.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          variant="body2"
          color="textSecondary"
          dangerouslySetInnerHTML={{ __html: viewItem.description }}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Typography variant="body1" color="textPrimary">
          {viewItem.categories.name}
        </Typography>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(viewItem.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ViewItem;
