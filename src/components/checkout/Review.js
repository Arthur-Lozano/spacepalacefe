import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import { useSelector } from "react-redux";

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
}));

export default function Review({ address, payment }) {
  const classes = useStyles();

  const cart = useSelector((state) => state.cart.itemList);
  const subtotal = useSelector((state) => state.cart.subtotal);

  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: `${payment.cardName}` },
    { name: "Card number", detail: `${payment.cardNumber}` },
    { name: "Expiry date", detail: `${payment.expiration}` },
  ];

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.details} />
            <Typography variant='body2'>{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' className={classes.total}>
            {subtotal}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {address.firstName} {address.lastName}
          </Typography>
          <Typography gutterBottom>
            {`${address.address1}, ${address.address2}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`}
          </Typography>
        </Grid>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
