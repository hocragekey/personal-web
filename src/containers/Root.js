import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import headshot from './../images/headshot.png';
import { observer, inject } from 'mobx-react';
import aws from './../images/aws.png';
import react from './../images/react.png';
import travis from './../images/travis.png';
import RaisedButton from 'material-ui/RaisedButton';
import Contact from './Contact';
import Specialties from './Specialties';
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
	}

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
									(Ionic, React Native) and Big Data (Java, Spark, Hadoop). I
									just started this website and I am planning on adding a blog
									all utilizing serverless technologies on AWS! Please feel free
									to reach out as I am open to networking and consulting
									opportunities.
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
								<a
									href="https://s3.amazonaws.com/aws-website-jimsite-949i8/resume/JimLebonitteResume.docx+(1).pdf"
									download="lebonitte-resume.pdf">
									<RaisedButton label="Resume" style={style} />
								</a>
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
					<Specialties />
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
