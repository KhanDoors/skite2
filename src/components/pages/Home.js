import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import Navbar from "../layouts/Navbar";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    // maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Navbar>
      <Container>
        <Typography
          style={{ color: "teal", fontFamily: "monseratt" }}
          variant="h2"
          gutterBottom
        >
          Home Page !!!!!!!!!!!!!!!!!!!!!!!!!
        </Typography>
        <Typography
          style={{ color: "grey", fontFamily: "Roboto" }}
          variant="h5"
          gutterBottom
        >
          Table of Contents:
        </Typography>
        <List className={classes.root}>
          {/* <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <span role="img" aria-label="exercise">
                {" "}
                💥{" "}
              </span>
            </ListItemAvatar>
            <ListItemText
              primary="Exercises"
              style={{ color: "purple" }}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                  >
                    CRUD Example
                  </Typography>
                  {
                    " — The purpose of this page is to demonstrate full Create, Read, Update and Delete functionality."
                  }
                </React.Fragment>
              }
            />
          </ListItem> */}
          <Divider variant="inset" component="li" />
        </List>
      </Container>
    </Navbar>
  );
}

export default Home;
