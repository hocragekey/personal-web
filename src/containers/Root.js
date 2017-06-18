import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import headshot from './../images/headshot.png';
import node from './../images/nodejs.png';
import aws from './../images/aws.png';
import docker from './../images/docker.png';
import react from './../images/react.png';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';
import './Root.css';

const style = {
    margin: 12,
};

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };
    render() {
        return (
            <div>
                <Row className="blue-bg">
                    <Col xs={12}>
                        <Row end="xs">
                            <Col className="nav-row" xs={12}>
                                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                                <i className="fa fa-linkedin fa-2x top-icon-pad" aria-hidden="true"></i>
                                <i className="fa fa-angellist fa-2x top-icon-pad" aria-hidden="true"></i>
                            </Col>
                        </Row>
                        <Row className="image-row" center="xs">
                            <Col xs={12}>
                                <img src={headshot} className="head-image" alt="Jim Lebonitte" />
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col xs={12}>
                                <h1>Hi, My Name Is Jim Lebonitte</h1>
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col xs={1}>

                            </Col>
                            <Col xs={10}>
                                <h3>I am a software architect spanning a wide variety of technologies who has been fortunate to work alongside great people
                        throughout my career that taught me what I know today.  Currently I am working at Nielsen as a Portfolio Architect focused on Cloud-Based Architecture,
                        UI/JavaScript (Angular and React), Big Data (Spark and Hadoop), Analytics and Client Facing UI Products.

                    </h3>
                            </Col>
                            <Col xs={1}>

                            </Col>
                        </Row>
                        <Row className="section" center="xs">
                            <Col xs={12}>
                                <RaisedButton label="Contact Me" style={style} />
                                <RaisedButton label="Resume" style={style} />
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col xs={12}>
                                <h1>I specialize in</h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Tabs
                            onChange={this.handleChange}
                            value={this.state.slideIndex}>
                            <Tab label="DevOps Consulting" value={0}>
                                
                            </Tab>
                            <Tab label="Cloud Migrations" value={1}>
                                
                            </Tab>
                            <Tab label="UI Rearchitecting" value={2}>
                                
                            </Tab>
                        </Tabs>
                        <SwipeableViews
                            index={this.state.slideIndex}
                            onChangeIndex={this.handleChange}
                        >
                            <div>
                                    <h2>DevOps Consulting</h2>
                                    <p>
                                        Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
                                </div>
                            <div>
                                    <h2>Cloud Migrations</h2>
                                    <p>
                                        This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
                                </div>
                                <div>
                                    <h2>UI Architecture</h2>
                                    <p>
                                        This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
                                </div>
                            
                        </SwipeableViews>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col xs={12}>

                    </Col>
                </Row>
                <Row className="section" center="xs">
                    <Col xs={12}>
                        <h2>
                            A few technologies I enjoy working with
            </h2>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col xs={1}>

                    </Col>
                    <Col xs={10}>
                        <img src={aws} alt="Amazon Web Services" />
                        <img className="tech-img-pad" src={node} alt="NodeJS" />
                        <img className="tech-img-pad" src={docker} alt="Docker" />
                        <img className="tech-img-pad" src={react} alt="React" />
                    </Col>

                    <Col xs={1}>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default Root;