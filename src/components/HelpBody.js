import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How Do I Login or Register?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At the top of the page, click the "Login" or "Register" links if you are currently not logged in, or, click on the yellow "Login" button on the homepage.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How Do I View My Cart?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At the top of the page, click on the Cart Icon which will take you directly to your currently populated or empty cart.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What Currencies Do You Currently Accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Currently, Space Palace can take accept Solar-Credits, Asteroid Samples, Crypto-Currency, Hours of Labor Mining Nearby Moons and Discover Card
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What Types of Products Do You Offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are able to cater to ALL of your space traveling needs, with categories such as "Weapons", "Rockets and Starships", "Suits and Clothing", "Botony, Seeds and Fauna", as well as "Habitats and Capusles"! If you see something you wish we had available, send us a note on our Contact form by following the link at the bottom of this page.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What Planets Do You Ship To?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Presently, Space Palace ships solar-system-wide, from Mercury to Pluto. In the new future once our wormhole express way is fully constructed, we will begin shipping out to other regions of the Milky Way Galaxy, and beyond!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}