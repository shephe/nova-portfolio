import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card/Card'
import CardBody from '../components/Card/CardBody'
import imagesStyles from "assets/jss/nextjs-material-kit-pro/imagesStyles.js";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import { cardTitle } from "assets/jss/nextjs-material-kit-pro.js";

import mushroom from '../assets/img/MushroomHunt.png'
import dayoff from '../assets/img/DayOffPDX.png'
import complaints from '../assets/img/Complaints.png'
import gifted from '../assets/img/Gifted.png'

const style = {
  ...imagesStyles,
  cardTitle
};

const useStyles = makeStyles(style);

export default function Portfolio (props) {
    const titleStyle = {textAlign: 'center', fontSize: '2rem', padding: '1rem', backgroundColor: 'rgb(144,53, 170)', color: 'white', width: '96vw'}
    const style = {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}
    const classes = useStyles()
    return (
        <div className='portfolio'>
            <NavBar></NavBar>
            <Card style={titleStyle}>Portfolio Projects</Card>
            <div className="site-cards" style={style}>

            <Card style={{width: '20rem', margin: '1rem'}}>
                    <img style={{ height: "180px", width: "100%", display: "block" }}
                    className={classes.imgCardTop} src={gifted} alt="Gifted App" />

                    <CardBody>
                        <h2 className={classes.cardTitle + ' ' + 'card-title'}>PDX Events</h2>
                        <h3>Find and add events happening near you in Portland, Oregon.</h3>
                        <Button color="primary" href="https://pdxevents.xyz/">live site</Button>
                        <Button color="primary" href="https://github.com/shephe/events_backend">Backend Code</Button>
                        <Button color="primary" href="https://github.com/shephe/events-frontend">Frontend Code</Button>
                    </CardBody>
                </Card>

                <Card style={{width: '20rem', margin: '1rem'}}>
                    <img style={{ height: "180px", width: "100%", display: "block" }}
                    className={classes.imgCardTop} src={mushroom} alt="Mushroom Hunt" />

                    <CardBody>
                        <h2 className={classes.cardTitle + ' ' + 'card-title'}>Mushroom Hunt</h2>
                        <h3>A simple 2-player browser game.</h3>
                        <Button color="primary" href="https://shephe.github.io/mushroom-hunt/">live site</Button>
                        <Button color="primary" href="https://github.com/shephe/mushroom-hunt">See Code</Button>
                    </CardBody>
                </Card>

                <Card style={{width: '20rem', margin: '1rem'}}>
                    <img style={{ height: "180px", width: "100%", display: "block" }}
                    className={classes.imgCardTop} src={dayoff} alt="Day Off PDX" />

                    <CardBody>
                        <h2 className={classes.cardTitle + ' ' + 'card-title'}>Day Off PDX</h2>
                        <h3>Find places to explore in Portland, Oregon.</h3>
                        <Button color="primary" href="https://spk-project2.herokuapp.com/places">live site</Button>
                        <Button color="primary" href="https://github.com/shephe/project-2">See Code</Button>
                    </CardBody>
                </Card>

                <Card style={{width: '20rem', margin: '1rem'}}>
                    <img style={{ height: "180px", width: "100%", display: "block" }}
                    className={classes.imgCardTop} src={complaints} alt="Complaints App" />

                    <CardBody>
                        <h2 className={classes.cardTitle + ' ' + 'card-title'}>Complaints</h2>
                        <h3>Shows most recent complaints (not crimes) to NYPD based on borough.</h3>
                        <Button color="primary" href="https://shephe.github.io/complaints/">live site</Button>
                        <Button color="primary" href="https://github.com/shephe/complaints">See Code</Button>
                    </CardBody>
                </Card>

                <Card style={{width: '20rem', margin: '1rem'}}>
                    <img style={{ height: "180px", width: "100%", display: "block" }}
                    className={classes.imgCardTop} src={gifted} alt="Gifted App" />

                    <CardBody>
                        <h2 className={classes.cardTitle + ' ' + 'card-title'}>Gifted</h2>
                        <h3>Keep track of gifts you've given and their recipients. Group project with Dana Zhang and Sharon Kim.</h3>
                        <Button color="primary" href="https://floating-caverns-88204.herokuapp.com/">live site</Button>
                        <Button color="primary" href="https://github.com/sharonk1295/gifted-project">See Code</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
