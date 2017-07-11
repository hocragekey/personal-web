import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Col } from 'react-flexbox-grid';

@inject('viewStore')
@observer
class Specialties extends Component {
	render() {
		return (
			<Col xs={12}>
				<Tabs
					onChange={this.props.viewStore.handleSlideChange}
					value={this.props.viewStore.vState.homeSlideIdxx}>
					<Tab label="Cloud" value={0} />
					<Tab label="Hadoop" value={1} />
					<Tab label="UI" value={2} />
					<Tab label="DevOps" value={3} />
					<Tab label="Dev" value={4} />
				</Tabs>
				<SwipeableViews
					index={this.props.viewStore.vState.homeSlideIdx}
					onChangeIndex={this.props.viewStore.handleSlideChange}>
					<div className="tab-detail-div">
						<h2>Cloud Architecture</h2>
						<p className="tab-detail-text">
							I enjoy working on cloud providers and the innovation that these
							platforms have brought to the technology community is incredible!
							I have worked on public clouds for over 5 years including
							companies such as AWS, Azure, Linode, Joyent and Softlayer. New
							technologies such as serverless and Docker are exciting new
							technologies that are changing the way people build products.
						</p>
					</div>
					<div className="tab-detail-div">
						<h2>Apache Spark / Hadoop</h2>
						<p className="tab-detail-text">
							I enjoy working on Big Data projects that utilize technologies
							from the Hadoop ecosystem. I especially enjoy utilizing Apache
							Spark, Hive, EMR, Mesos, Yarn and Alluxio. I think both YARN and
							Mesos each have their own use-cases and both should definitely be
							considered when starting a new big data project. When using
							containers running Spark on Mesos can be an attractive option to
							keep the underlying infrastructure / engine the same across your
							whole environment.
						</p>
					</div>
					<div className="tab-detail-div">
						<h2>UI / Mobile</h2>
						<p className="tab-detail-text">
							I have over 10 years of experience designing and developing all
							types of User Interfaces that are deployed via Web, Mobile, and
							even Desktop Applications. Today I specialize in the 2 major UI
							frameworks, <a href="https://angular.io/">Angular</a> and{' '}
							<a href="https://facebook.github.io/react/">React</a>, along with
							their native mobile packaging counterparts,{' '}
							<a href="https://ionicframework.com/">Ionic</a> and{' '}
							<a href="https://facebook.github.io/react-native/">
								React Native
							</a>
							{'. '}
							I also am starting to learn <a href="https://vuejs.org/">
								Vue
							</a>{' '}
							as it is gaining quite a lot of traction in the marketplace.
						</p>
					</div>
					<div className="tab-detail-div">
						<h2>DevOps / Docker</h2>
						<p className="tab-detail-text">
							I think a good DevOps setup is critical for the success of any
							software development project. I enjoy using PaaS systems such as
							TravisCI and CircleCI. I also have experience setting up and
							maintainting Jenkins environments for internal enterprise
							environments. Containers are also really taking off and I really
							enjoy utilizing Docker across a variety of Orchestration platforms
							such as Docker Engine, Kubernetes, and Mesos depending on the use
							case. Even this website is setup to deploy automatically on a
							succesfull pull request!
						</p>
					</div>
					<div className="tab-detail-div">
						<h2>Development</h2>
						<p className="tab-detail-text">
							I am well versed in quite a few programming languages such as
							Java, JavaScript, Yorick, C, PHP, etc. I have the most expertise
							in both the Java and JavaScript technology eco-systems. For Java I
							really enjoy utilzing Maven, Pivotal/Spring Frameworks (Spring
							Boot Rocks!), Hadoop, Hazelcast and Spark. For JavaScript I enjoy
							utilizing npm, Express, React, Angular, TypeScript, Socket IO, and
							SocketStream.
						</p>
					</div>
				</SwipeableViews>
			</Col>
		);
	}
}

export default Specialties;
