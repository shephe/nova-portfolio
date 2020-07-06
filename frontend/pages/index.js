import React from 'react';
import Card from 'components/Card/Card';
import fetch from 'isomorphic-unfetch';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import NavBar from '../components/NavBar'

import imagesStyles from "assets/jss/nextjs-material-kit-pro/imagesStyles.js";

import { cardTitle } from "assets/jss/nextjs-material-kit-pro.js";

const style = {
  ...imagesStyles,
  cardTitle
};

const useStyles = makeStyles(style);

export default function Index (props) {
    const classes = useStyles()
    return (
        <div>
          <NavBar></NavBar>
    
            <Card style={{ width: "20rem" }}>
      <img
        style={{ height: "180px", width: "100%", display: "block" }}
        className={classes.imgCardTop}
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>{props.projects[0].title}</h4>
        <a href={props.projects[0].code}>
            Repo
        </a>
      <br/>
          <a href={props.projects[0].deployment}>
            Live Site
        </a>
          <br/>
        <Button color="primary">Go to live site</Button>
      </CardBody>
    </Card>
        </div>
    )
}

Index.getInitialProps = async () => {
    let res, data, projects;
    try{
        res = await fetch('http://159.89.131.22:8000/api/v1/project/');
        data = await res.json();
        projects = data.objects;
    } catch(error){
        console.error(error)
    }

    return {
        projects
    }
}