class ToastMsg {
	//Web elements locators
	toastMsgContainer = "div #toast-container"
	toastMsg = "div #toast-container .toast-message"

	//Get web elements with locators
	getToastMsgContainer() {
		return cy.get(this.toastMsgContainer)
	}
	getToastMsg() {
		return cy.get(this.toastMsg)
	}
}

export default ToastMsg
