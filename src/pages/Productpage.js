  
import {useEffect} from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { changeproduct, loadProducts } from './account/store/productpage.js';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {addToCart} from './account/store/cart.js'



const useStyles = makeStyles({
  root: {
    width: 325,
    maxHeight: 325,
  },
  media: {
    height: 150,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    paddingRight: 20,
  }
});

const Products = (props) => {

  useEffect(() => {
    props.loadProducts();
  }, [])

  const classes = useStyles();
  if(props.category.name){
    return (
      <div className="products">
        <h2>{props.category.name.toUpperCase()}</h2>
        <h2 className="description">{props.category.description}</h2>
          {props.products.map((product, i) => {
            return (
            <Card key={i} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/logo192.png"
                title="Product Picture"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  ${product.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  IN STOCK: {product.inStock}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.buttonContainer}>
              <Button onClick={() => props.addToCart(product)}size="small" color="primary">
                    ADD TO CART
              </Button>
              <Button  size="small" color="primary">
                    VIEW DETAILS
              </Button>
            </CardActions>
          </Card>
          )
        })}
    </div>
    )
  }else{
    return(
      <div className="products">
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    category: state.categories
  }
}

const mapDispatchToProps = {
 
  changeproduct,
  addToCart,
  loadProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
