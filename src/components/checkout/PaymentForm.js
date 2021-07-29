import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PaymentForm({ payment, setPayment }) {
  const changeHandler = (e) => {
    const newState = { ...payment, [e.target.name]: e.target.value };
    console.log(newState);
    setPayment(newState);
  };

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardName'
            name='cardName'
            label='Name on card'
            fullWidth
            autoComplete='cc-name'
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardNumber'
            label='Card number'
            name='cardNumber'
            fullWidth
            autoComplete='cc-number'
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='expDate'
            label='Expiry date'
            name='expiration'
            fullWidth
            autoComplete='cc-exp'
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cvv'
            label='CVV'
            helperText='Last three digits on signature strip'
            fullWidth
            autoComplete='cc-csc'
            onChange={changeHandler}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
