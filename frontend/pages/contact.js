import { makeStyles } from "@material-ui/core/styles";import React from 'react'
import Card from '../components/Card/Card'
import CardBody from '../components/Card/CardBody'
import imagesStyles from "assets/jss/nextjs-material-kit-pro/imagesStyles.js";
import { cardTitle } from "assets/jss/nextjs-material-kit-pro.js";
import NavBar from '../components/NavBar'
import MyFooter from '../components/CustomFooter'

const style = {
    ...imagesStyles,
    cardTitle
  };
  

const useStyles = makeStyles(style);

export default function Contact (props) {
    const classes = useStyles()
    const style = {height: '75vh', textAlign: 'center', alignContent: 'center'}
    return (
        <div className='contact'>
            <NavBar></NavBar>
            <Card>
                <CardBody style={style}>
                    <h2 className={classes.cardTitle}>Get in touch at spkelley26@gmail.com</h2>
                </CardBody>
            </Card>
            <MyFooter/>
        </div>
    )
}