import { observable, action } from 'mobx';

class ViewState {
	@observable vState;

	constructor() {
		let vState = {};
		vState.contactModalVisible = false;
		vState.homeSlideIdx = 0;
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

	@action
	handleSlideChange = value => {
		this.vState.homeSlideIdx = value;
	};
}

export default ViewState;
