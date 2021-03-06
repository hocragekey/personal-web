import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ReCAPTCHA from 'react-google-recaptcha';

@inject('viewStore')
@observer
class Contact extends Component {
	constructor(props) {
		super(props);
		this.viewStore = this.props.viewStore;
	}

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.viewStore.hideContactModal}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				onTouchTap={this.viewStore.hideContactModal}
			/>
		];
		return (
			<Dialog
				title="Contact Me"
				actions={actions}
				modal={false}
				open={this.viewStore.vState.contactModalVisible}
				onRequestClose={this.viewStore.hideContactModal}
				autoScrollBodyContent={true}>
				<p>
					Please feel free to drop me a line and I will get back to you as soon
					as possible!
				</p>
				<TextField
					hintText="John Doe"
					floatingLabelText="Name"
					style={{ width: '90%' }}
				/>
				<br />
				<TextField
					hintText="john@gmail.com"
					floatingLabelText="Email"
					style={{ width: '90%' }}
				/>
				<br />
				<TextField
					hintText="How can I help you?"
					multiLine={true}
					rows={6}
					rowsMax={10}
					floatingLabelText="Message"
					style={{ width: '90%' }}
				/>
				<br />
				<ReCAPTCHA
					ref="recaptcha"
					sitekey="6LfLcigUAAAAAMWBtH73VfTBbHYl7iMscTYxqdVg"
				/>
			</Dialog>
		);
	}
}

export default Contact;
