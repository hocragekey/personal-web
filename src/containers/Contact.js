import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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
				keyboardFocused={true}
				onTouchTap={this.viewStore.hideContactModal}
			/>
		];

		return (
			<div>
				<Dialog
					title="Scrollable Dialog"
					actions={actions}
					modal={false}
					open={this.viewStore.vState.contactModalVisible}
					onRequestClose={this.viewStore.hideContactModal}
					autoScrollBodyContent={true}>
					<p>dialog openend!</p>
				</Dialog>
			</div>
		);
	}
}

export default Contact;
