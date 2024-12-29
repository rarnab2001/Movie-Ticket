import React, { useContext, useState } from 'react';
import Button from './Button/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from './context/Context';
import { toast } from 'react-toastify';

function BookingPage() {
	const [inputName, setInputName] = useState('');
	const [date, setDate] = useState('');
	const [counter, setCounter] = useState(0);
	const [booking, setBooking] = useState(null);
	const [selectTime, setSelectTime] = useState('');
	const { locationData } = useContext(AppContext);

	const time = ["9.30AM", "12.30PM", "3.10PM", "6.10PM", "8.15PM", "9.20PM", "11.05PM"];
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/movies');
	};

	const handleIncrement = () => {
		if (counter < 8) {
			setCounter(counter + 1);
		}
	};

	const handleDecrement = () => {
		if (counter >= 1) {
			setCounter(counter - 1);
		}
	}
	const goToPayement = () => {
		navigate('/payment')
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputName) {
			toast.error("Please fill the name");
		} else if (!date) {
			toast.error("Please fill the date");
		} else if (!counter) {
			toast.error("Please select at least one seat");
		} else if (!selectTime) {
			toast.error("Please select a time");
		} else {
			const user = {
				title: locationData?.state?.title,
				name: inputName,
				date: date,
				total_price: counter * 200,
				time: selectTime
			};
			setBooking(user);
		}
	};

	return (
		<div className='parent'>
			<div className="form-container2">
				<form className="form2" onSubmit={handleSubmit}>
					<h1>Booking Page</h1>
					<div className="form-group2">
						<label className="title-input2">Movie-Title:</label>
						<div className="input2">{locationData?.state?.title}</div>
					</div>
					<div className="form-group2">
						<h3>Name:</h3>
						<input
							className="name3"
							type="text"
							id="name"
							name="name"
							placeholder="Enter your name"
							value={inputName}
							onChange={(e) => setInputName(e.target.value)}
						/>
					</div>
					<div className="form-group3">
						<h3>Date:</h3>
						<input className="date" type="date" id="date" name="date" placeholder="Enter your date" value={date} onChange={(e) => setDate(e.target.value)}
						/>
					</div>
					<div className="time-btn">
						<div className="time">
							<h3>Time:</h3>
							<div className="button-container">
								{time.map((curElem, index) => {
									return (
										<button
											key={index} className={`button ${selectTime === curElem ? 'selected' : ''}`} type="button" onClick={() => setSelectTime(curElem)}>
											{curElem}
										</button>
									);
								})}
							</div>
						</div>
					</div>

					<div className="body-icrement-decrement">
						<div>Seats: ₹200/- Max 8 Seats</div>
						<div className="counter-container">
							<button
								type="button" id="decrement" className="btn" onClick={handleDecrement}>-</button>
							<span id="counter">{counter}</span>
							<button
								type="button" id="increment" className="btn" onClick={handleIncrement}>+</button>
						</div>
					</div>
					<button type="submit" className="submit-btn">Submit</button>
				</form>
			</div>
			<Button className="go-back2" text="X" onClick={handleClick} />

			{booking && (
				<div className="child">
					<h3>Booking Details</h3>
					<p><strong>Movie-Title:</strong> {booking.title}</p>
					<p><strong>Name:</strong> {booking.name}</p>
					<p><strong>Date:</strong> {booking.date}</p>
					<p><strong>Time:</strong> {booking.time}</p>
					<p><strong>Total Price:</strong> ₹{booking.total_price}</p>
					<NavLink to={'/payment'} state={{ booking }}>
						<Button text="payment" className="submit-btn" onClick={goToPayement} />
					</NavLink>
				</div>
			)}
		</div>
	);
}

export default BookingPage;
