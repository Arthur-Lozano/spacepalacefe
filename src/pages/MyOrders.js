import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  paper: {
    width: "50%",
    alignSelf: "center",
  },
}));

const MyOrders = () => {
  const classes = useStyles();
  const orders = useSelector((state) => state.user.user.orders);

  console.log(orders);

  return (
    <>
      <Paper className={classes.paper}>
        <Typography variant='h6' gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {orders &&
            orders.map((product) => (
              <ListItem className={classes.listItem} key={product.subtotal}>
                <ListItemText
                  primary={product.subtotal}
                  secondary={product.details}
                />
                <Typography variant='body2'>{product.subtotal}</Typography>
              </ListItem>
            ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary='Total' />
            <Typography variant='subtitle1' className={classes.total}>
              {5}
            </Typography>
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

export default MyOrders;
