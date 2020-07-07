import React from 'react';
import Card from 'components/Card/Card';
import fetch from 'isomorphic-unfetch';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import AccountCircle from "@material-ui/icons/AccountCircle"
import NavBar from '../components/NavBar'
import MyFooter from '../components/CustomFooter'
import Parallax from "components/Parallax/Parallax.js"
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
          <NavBar/>
          <Parallax image={require("../assets/img/bg.jpg")} >
            
          <Card style={{background: 'rgba(255, 255, 255, 0)', boxShadow: 'none'}}>
            <CardBody>
              <h1 className={classes.cardTitle} style={{textAlign: 'center'}}>Welcome</h1>
              <h2 style={{textAlign: 'center'}}>Sheila Kelley   ||   Software Engineer</h2>
            </CardBody>
          

            <div className="cards" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>

            <Card style={{ width: "20rem", textAlign: 'center', margin: '1rem', marginBottom: '2rem', background: 'rgba(255, 255, 255, 0.7)', }}>
              <AccountCircle
              style={{ height: "180px", width: "100%", display: "block" }}
              className={classes.imgCardTop}
              
              alt="Card-img-cap"
            />
            <CardBody>
            <h2 className={classes.cardTitle} style={{textAlign: 'center'}}>About Me</h2>
              <h3 className={classes.cardTitle}>Get to know a little more about me.</h3>
              <Button color="primary" href="/about">About</Button>
            </CardBody>
            </Card>

            <Card style={{ width: "20rem", textAlign: 'center', margin: '1rem', marginBottom: '2rem', background: 'rgba(255, 255, 255, 0.7)'}}>
              <img
              style={{ height: "180px", width: "100%", display: "block" }}
              className={classes.imgCardTop}
              src="https://image.flaticon.com/icons/svg/25/25231.svg"
              alt="Card-img-cap"
            />
            <CardBody>
            <h2 className={classes.cardTitle} style={{textAlign: 'center'}}>GitHub</h2>
              <h3 className={classes.cardTitle}>Check out my GitHub account & all associated repositories.</h3>
              <Button color="primary" href="https://github.com/shephe">See my code</Button>
            </CardBody>
            </Card>

            <Card style={{ width: "20rem", textAlign: 'center', margin: '1rem', marginBottom: '2rem', background: 'rgba(255, 255, 255, 0.7)' }}>
              <img
              style={{ height: "180px", width: "180px", display: "block", alignSelf: 'center'}}
              className={classes.imgCardTop}
              src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-picture-31.png"
              alt="Card-img-cap"
            />
            <CardBody>
            <h2 className={classes.cardTitle} style={{textAlign: 'center'}}>LinkedIn</h2>
              <h3 className={classes.cardTitle}>Professional profile including past experience and achievements.</h3>
              <Button color="primary" href="https://www.linkedin.com/in/sheilaphedrakelley/">See profile</Button>
            </CardBody>
            </Card>

            </div>
          </Card>
          </Parallax>
          <MyFooter></MyFooter>
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