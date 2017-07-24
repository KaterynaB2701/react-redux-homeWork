import React, {Component} from 'react';

class InputField extends Component {
	constructor(props) {
		super(props);

		this.sendComment = this.sendComment.bind(this);
	}

	sendComment(e) {
		e.preventDefault();
		if (this.testInput.value != "") {
			this.props.onDOMChange(this.testInput.value);
			this.testInput.value = "";
		}
	}

	render() {
		return (
			<form className="inputCmnt" onSubmit={this.sendComment}>
				<input type="text" ref={(input) => this.testInput = input}/>
				<button type="submit">Send Comment</button>
			</form>
		)
	}
}

export default InputField;