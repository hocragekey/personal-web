import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import headshot from "./../images/headshot.png";
import node from "./../images/nodejs.png";
import aws from "./../images/aws.png";
import docker from "./../images/docker.png";
import react from "./../images/react.png";
import { Tabs, Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import RaisedButton from "material-ui/RaisedButton";
import "./Root.css";

const style = {
  margin: 12
};

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = value => {
    this.setState({ slideIndex: value });
  };

  render() {
    return (
      <div>
        <Row className="blue-bg">
          <Col xs={12}>
            <Row end="xs">
              <Col className="nav-row" xs={12}>
                <i className="fa fa-github fa-2x" aria-hidden="true" />
                <i
                  className="fa fa-linkedin fa-2x top-icon-pad"
                  aria-hidden="true"
                />
                <i
                  className="fa fa-angellist fa-2x top-icon-pad"
                  aria-hidden="true"
                />
              </Col>
            </Row>
            <Row className="image-row" center="xs">
              <Col xs={12}>
                <img
                  src={headshot}
                  className="head-image"
                  alt="Jim Lebonitte"
                />
              </Col>
            </Row>
            <Row center="xs">
              <Col xs={12}>
                <h1>Hi, My Name Is Jim Lebonitte</h1>
              </Col>
            </Row>
            <Row center="xs">
              <Col xs={1} />
              <Col xs={10}>
                <h3>
                  I am a software architect spanning a wide variety of
                  technologies who has been fortunate to work alongside great
                  people throughout my career that taught me what I know today.
                  Currently I am working as a Full Stack Architect focused on
                  Cloud-Based Architecture, UI/JavaScript (Angular and React),
                  Big Data (Spark and Hadoop), Analytics and Client Facing UI
                  Products. Please feel free to reach out as I am open to
                  networking and consulting opportunities.

                </h3>
              </Col>
              <Col xs={1} />
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
            <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
              <Tab label="Software Stacks" value={0} />
              <Tab label="UI / Mobile Architecture" value={1} />
              <Tab label="DevOps Consulting" value={2} />
              <Tab label="Cloud Migrations" value={3} />
              <Tab label="Developer Training" value={4} />
            </Tabs>
            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleChange}
            >
              <div className="tab-detail-div">
                <h2>Software Stack Definition</h2>
                <p className="tab-detail-text">
                  Defining a standard, end-to-end software stack is critical for
                  your development team's productivity. I have experience across
                  a wide variety of programming languages, architecture
                  components, cloud providers, etc. I do not feel that this is a
                  one size fits all decision and I can help analyze your product
                  / business needs along with your current development talent to
                  determine the best stack for you!
                </p>
              </div>
              <div className="tab-detail-div">
                <h2>UI / Mobile</h2>
                <p className="tab-detail-text">
                  I have over 10 years of experience designing and developing
                  all types of User Interfaces that are deployed via Web,
                  Mobile, and even Desktop Applications. Today I specialize in
                  the 2 major UI frameworks,
                  {" "}<a href="https://angular.io/">Angular</a>{" "}
                  and
                  {" "}<a href="https://facebook.github.io/react/">React</a>,
                  along
                  with their native mobile packaging counterparts,{" "}
                  <a href="https://ionicframework.com/">Ionic</a> and
                  {" "}
                  <a href="https://facebook.github.io/react-native/">
                    React Native
                  </a>
                  {". "}
                  I also am starting to learn{" "}
                  <a href="https://vuejs.org/">Vue</a>{" "} as it is gaining
                  quite a lot of traction in the marketplace.
                </p>
              </div>
              <div className="tab-detail-div">
                <h2>DevOps Consulting</h2>
                <p className="tab-detail-text">
                  I specialize in helping companies architect good DevOps
                  practices that fit how their organizations work together and
                  maximize their productivity. This goes from
                  how developers commit their code, which cloud provider(s) you
                  are using, code/application deployment etc. On top of all of
                  that it is critical that you
                  keep your infrastructure secure. I specialize in a wide
                  variety of tools such as Docker, Terraform, Ansible, etc. and
                  have experience handling deployments On-Premise and with the
                  following cloud providers AWS, Azure,
                  Joyent, Google Cloud, and SoftLayer.
                </p>
              </div>
              <div className="tab-detail-div">
                <h2>Cloud Migrations</h2>
                <p className="tab-detail-text">
                  This is another example of a controllable tab. Remember, if
                  you use controllable Tabs, you need to give all of your tabs
                  values or else you wont be able to select them.
                </p>
              </div>
              <div className="tab-detail-div">
                <h2>UI Architecture</h2>
                <p className="tab-detail-text">
                  This is another example of a controllable tab. Remember, if
                  you use controllable Tabs, you need to give all of your tabs
                  values or else you wont be able to select them.
                </p>
              </div>

            </SwipeableViews>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} />
        </Row>
        <Row className="section" center="xs">
          <Col xs={12}>
            <h2>
              A few technologies I enjoy working with
            </h2>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={1} />
          <Col xs={10}>
            <img src={aws} alt="Amazon Web Services" />
            <img className="tech-img-pad" src={node} alt="NodeJS" />
            <img className="tech-img-pad" src={docker} alt="Docker" />
            <img className="tech-img-pad" src={react} alt="React" />
          </Col>

          <Col xs={1} />
        </Row>
      </div>
    );
  }
}

export default Root;
