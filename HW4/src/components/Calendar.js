import React, {Component} from 'react';
import CurrentTime from './CurrentTime';

class Day extends React.Component {
	render() {
		const {
			day,
			day: {
				date,
				isCurrentMonth,
				isToday,
				number
				},
			select,
			selected
			} = this.props;

		return (
			<span
				key={date.toString()}
				className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")}
				onClick={()=>select(day)}>{number}</span>
		);
	}
}



class Calendar extends Component {
	constructor(props) {
		super(props);
		let date = new Date();
		this.state = {
			year: date.getFullYear(),
			month: date.getMonth(),
			selectedYear: date.getFullYear(),
			selectedMonth: date.getMonth(),
			selectedDate: date.getDate(),
			selectedDt: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
			startDay: 1,
			weekNumbers: false,
			minDate: this.props.minDate ? this.props.minDate : null,
			disablePast: this.props.disablePast ? this.props.disablePast : false,
			dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			monthNamesFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			firstOfMonth: null,
			daysInMonth: null
		};

		this.createCalendar = this.createCalendar.bind(this);
		this.getDay = this.getDay.bind(this);
	}
	getDay(date) {
		var day = date.getDay();
		if (day == 0) day = 7;
		return day - 1;
	}

	createCalendar(month) {
		let mon = month;
		let d = new Date(2017, mon);
		var table = [];

		// заполнить первый ряд от понедельника
		// и до дня, с которого начинается месяц
		// * * * | 1  2  3  4
		for (var i = 0; i < this.getDay(d); i++) {
			table.push('');
		}
		while (d.getMonth() == mon) {
			table.push(d.getDate());

			d.setDate(d.getDate() + 1);
		}

		// добить таблицу пустыми ячейками, если нужно
		if (this.getDay(d) != 0) {
			for (var i = this.getDay(d); i < 7; i++) {
				table.push('');
			}
		}

		// закрыть таблицу


		// только одно присваивание innerHTML
		console.log(table);
		return table;
	}

	render() {
		return(
			<div className="container">
				<div>{this.state.monthNamesFull[this.state.month+1]} {this.state.year}</div>
				<DayNames />
				{this.createCalendar(8).map((day, index) => <tr key={index}>{day}</tr>)}
				<CurrentTime />
			</div>
		)
	}

}


class DayNames extends React.Component {
	render() {
		return (
			<div className="row day-names">
				<span className="day">Sun</span>
				<span className="day">Mon</span>
				<span className="day">Tue</span>
				<span className="day">Wed</span>
				<span className="day">Thu</span>
				<span className="day">Fri</span>
				<span className="day">Sat</span>
			</div>
		);
	}
}

export default Calendar;
