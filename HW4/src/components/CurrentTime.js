import React, {Component} from 'react';

class CurrentTime extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hours: "",
			minutes: "",
			seconds: ""
		};
		this.timer = this.timer.bind(this);
	}

	componentDidMount() {
		var intervalId = setInterval(this.timer, 1000);
		// store intervalId in the state so it can be accessed later:
		this.setState({intervalId: intervalId});
	}

	componentWillUnmount() {
		// use intervalId from the state to clear the interval
		clearInterval(this.state.intervalId);
	}

	timer() {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		this.setState({hours, minutes, seconds});
	}

	render() {
		// You do not need to decrease the value here
		return (
			<section>
				{this.state.hours}:{this.state.minutes}:{this.state.seconds}
			</section>
		);
	}
}

export default CurrentTime;