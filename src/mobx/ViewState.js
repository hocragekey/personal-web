import { observable, action } from 'mobx';

class ViewState {
	@observable vState;

	constructor() {
		let vState = {};
		vState.contactModalVisible = false;
		this.vState = vState;
	}

	@action
	showContactModal = value => {
		this.vState.contactModalVisible = true;
	};

	@action
	hideContactModal = value => {
		this.vState.contactModalVisible = false;
	};
}

export default ViewState;
