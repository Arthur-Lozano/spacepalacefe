
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from '../assets/space5.jpg';
import { shadows } from '@material-ui/system';
import { AirportShuttle } from '@material-ui/icons';
import { addToCart } from './cart.js'
import { Link } from 'react-router-dom';
const axios = require('axios');


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    fontFamily: "'Barlow', sans-serif",
    color: "white",
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${Image})`,
    padding: theme.spacing(2, 0, 4),
    shadows: 5,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album(props) {
  const classes = useStyles();

  const [product, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(`https://spacepalacedb.herokuapp.com/products`);
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              <h2 className={classes.heroContent}>I am throwing a party in space can you help me planet?</h2>
              <h3 className={classes.heroContent}>Choose from some of our prdoucts below</h3>
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {product.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.images}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.description}
                    </Typography>
                    <Typography>
                      Item Weight: {card.itemWeight}
                    </Typography>

                    <Typography>
                      Category: {card.category}
                    </Typography>
                    <Typography>
                      Details: {card.details}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Link to={`/product/${card._id}`}>
                     <Button onClick={() => props.addToCart(product)}size="small" color="primary">
                    </Link>
                    ADD TO CART
              </Button>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </React.Fragment >
  );
}
