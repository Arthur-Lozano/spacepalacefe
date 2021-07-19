import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
// import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';
import  {  removeFromCart, }from '../../store/cart.js';
import { connect } from 'react-redux';


import './Cart.scss';

const useStyles = makeStyles({
  root: {
        // maxWidth: 150,
        backgroundColor: "#FBCEB1",
        color:"green",
        position: "fixed",
          top: "0",
         right: "0",
         marginTop:"157px",
         marginRight:"150px"
  
        

      
      
    }
  });




const Cart = (props) => {

    const classes = useStyles();
  
return (

 <Card className={classes.root}  >
    
      <List  className="cart">
        {/* <ListItem> */}
          {/* <ListItemText
            primary="CART"
          /> */}
        {/* </ListItem> */}
        
          {props.cart.map(item => {
            return (
              <ListItem key={item.name}>
                
              <ListItem key={item.name}>
             {item.name} : {item.cart}
            </ListItem>
                  
                
                <ListItemSecondaryAction>
                  
                  <Button onClick={() => props.removeFromCart(item)}> X </Button> 

                  {/* <Button className="addButton" onClick={() => props.addToCart(product)} size="small" color ="primary">
                ADD TO CART
              </Button> */}
                  
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
       
      </List>
   
    </Card>

    
    )
}

const mapStateToProps = (data) => {
  return {
    cart: data.cart.cart,
  }
}

const mapDispatchToProps = {
  removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);