import React, {Component} from 'react';
import InputField from './InputField';
import CommentList from './CommentList';


class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			comment: ""
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.commentList = [];
	}
	onSubmit(comment) {
		this.setState({comment});
		this.commentList.push(comment);
	}

	render() {
		return(
			<div className="container">
				<h1>Comments</h1>
				<InputField inputValue={this.state.inputValue} onDOMChange={this.onSubmit}/>
				<CommentList commentList={this.commentList}/>
			</div>
		)
	}

}
export default Comments;
