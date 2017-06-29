import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import headshot from './../images/headshot.png';
import { observer, inject } from 'mobx-react';
import aws from './../images/aws.png';
import react from './../images/react.png';
import travis from './../images/travis.png';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';
import Contact from './Contact';
import './Root.css';

const style = {
	margin: 12
};

@inject('viewStore')
@observer
class Root extends Component {
	constructor(props) {
		super(props);

		this.viewStore = this.props.viewStore;

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
								<a className="no-recent-a" href="https://github.com/hocragekey">
									<i className="fa fa-github fa-2x" aria-hidden="true" />
								</a>
								<a
									className="no-recent-a"
									href="https://www.linkedin.com/in/jimlebonitte/">
									<i
										className="fa fa-linkedin fa-2x top-icon-pad"
										aria-hidden="true"
									/>
								</a>
								<a
									className="no-recent-a"
									href="https://angel.co/jim-lebonitte">
									<i
										className="fa fa-angellist fa-2x top-icon-pad"
										aria-hidden="true"
									/>
								</a>
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
									Cloud Architecture (AWS, Azure, Joyent), JavaScript (Angular,
									React, Nodejs), DevOps (Docker, TravisCI, Jenkins), Mobile
									(Ionic, React Native) and Big Data (Java, Spark, Hadoop).
									Please feel free to reach out as I am open to networking and
									consulting opportunities.
								</h3>
							</Col>
							<Col xs={1} />
						</Row>
						<Row className="section" center="xs">
							<Col xs={12}>
								<RaisedButton
									label="Contact Me"
									style={style}
									onTouchTap={this.viewStore.showContactModal}
								/>
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
							<Tab label="Cloud Migrations" value={0} />
							<Tab label="UI / Mobile Architecture" value={1} />
							<Tab label="DevOps" value={2} />
							<Tab label="Development" value={3} />
						</Tabs>
						<SwipeableViews
							index={this.state.slideIndex}
							onChangeIndex={this.handleChange}>
							<div className="tab-detail-div">
								<h2>Cloud Architecture</h2>
								<p className="tab-detail-text">
									I enjoy working on cloud providers and the innovation that
									these platforms have brought to the technology community is
									incredible! I have worked on public clouds for over 5 years
									including companies such as AWS, Azure, Linode, Joyent and
									Softlayer. I really enjoy taking advantage of the new
									serverless components of cloud and utilizing Docker when
									servers are required.
								</p>
							</div>
							<div className="tab-detail-div">
								<h2>UI / Mobile</h2>
								<p className="tab-detail-text">
									I have over 10 years of experience designing and developing
									all types of User Interfaces that are deployed via Web,
									Mobile, and even Desktop Applications. Today I specialize in
									the 2 major UI frameworks,{' '}
									<a href="https://angular.io/">Angular</a> and{' '}
									<a href="https://facebook.github.io/react/">React</a>, along
									with their native mobile packaging counterparts,{' '}
									<a href="https://ionicframework.com/">Ionic</a> and{' '}
									<a href="https://facebook.github.io/react-native/">
										React Native
									</a>
									{'. '}
									I also am starting to learn{' '}
									<a href="https://vuejs.org/">Vue</a> as it is gaining quite a
									lot of traction in the marketplace.
								</p>
							</div>
							<div className="tab-detail-div">
								<h2>DevOps</h2>
								<p className="tab-detail-text">
									I think a good DevOps setup is critical for the success of any
									software development project. I enjoy using PaaS systems such
									as TravisCI and CircleCI. I also have experience setting up
									and maintainting Jenkins environments for internal enterprise
									environments. Containers are also really taking off and I
									really enjoy utilizing Docker across a variety of
									Orchestration platforms such as Docker Engine, Kubernetes, and
									Mesos depending on the use case. Even this website is setup to
									deploy automatically on a succesfull pull request!
								</p>
							</div>
							<div className="tab-detail-div">
								<h2>Development</h2>
								<p className="tab-detail-text">
									I am well versed in quite a few programming languages such as
									Yorick, C, PHP, etc. I have the most expertise in both the
									Java and JavaScript technology eco-systems. For Java I really
									enjoy utilzing Maven, Pivotal/Spring Frameworks (Spring Boot
									Rocks!), Hadoop, Hazelcast and Spark. For JavaScript I enjoy
									utilizing npm, Express, Socket IO, SocketStream,
								</p>
							</div>
						</SwipeableViews>
					</Col>
				</Row>
				<Row center="xs">
					<Col xs={12} />
				</Row>
				<Row className="section grey-bg" center="xs">
					<Col xs={12}>
						<h2>
							This website / blog was built utilizing the following technologies
						</h2>
					</Col>
				</Row>
				<Row center="xs" className="grey-bg">
					<Col xs={1} />
					<Col xs={10}>
						<img src={aws} alt="Amazon Web Services" />
						<img className="tech-img-pad" src={react} alt="React" />
						<img className="tech-img-pad" src={travis} alt="Travis" />
					</Col>

					<Col xs={1} />
				</Row>
				<Contact />
			</div>
		);
	}
}

export default Root;
