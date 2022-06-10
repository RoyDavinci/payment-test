import { useEffect, useState } from "react";
import "./App.css";
import UserImg from "./images/ape-7020995_640.png";
import Card from "./images/credit card.png";
import Visa from "./images/icons8-visa-48.png";
import Discover from "./images/icons8-discover-48.png";
import PayPal from "./images/paypal.png";

function App() {
	const [cardDetails, setCardDetails] = useState({
		card: "4324 5433 9382 1030",
		date: "03/24",
		code: "420",
		PostalCode: "10119",
		storeCard: false,
	});

	const [paymentDetails, setPaymentDetails] = useState({
		subtotal: 2497.0,
		tax: 119.64,
		code: 60.0,
	});

	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTotal(
			paymentDetails.subtotal + paymentDetails.tax - paymentDetails.code
		);
	}, [paymentDetails]);

	return (
		<div className='App'>
			<header className='app-header'>
				<div className='headerContainer'>
					<ul>
						<li>
							<a href='/'>TRIPS</a>
						</li>
						<li>
							<a href='/'>RECENTLY VIEWED</a>
						</li>
						<li>
							<a href='/'>BOOKINGS</a>
						</li>
						<li></li>
					</ul>
					<img src={UserImg} alt='' />
				</div>
			</header>
			<section className='section-center'>
				<article className='paymentInfo'>
					<div className='paymentInfoText'>
						<h1>Payment Information</h1>
						<p>Choose your method of Payment</p>
					</div>
					<img src={Card} alt='' />
				</article>
				<form action='' className='inputContainer'>
					<div className='card-header'>
						<div className='cardDetail'>
							<img src={Visa} alt='' />
							<img src={Discover} alt='' />
						</div>
						<div className='paypalSelection'>
							<input type='radio' className='radio-input' />
							<label htmlFor='' className='radio-label'>
								<img src={PayPal} alt='' className='paypal' />
							</label>
						</div>
					</div>
					<div className='inputDivContainer'>
						<div className='inputFormContainer'>
							<label htmlFor='credit-card'>Credit Card</label>
							<input
								type='text'
								placeholder=''
								id='credit-card'
								className=''
								name='card'
								value={cardDetails.card}
							/>
						</div>
						<div className='inputFormContainer'>
							<label htmlFor=''>Expiration Date</label>
							<input
								type='text'
								placeholder=''
								name='date'
								value={cardDetails.date}
								id=''
								className=''
							/>
						</div>
						<div className='inputFormContainer'>
							<label htmlFor=''>Security Code</label>
							<input
								type='text'
								name='code'
								value={cardDetails.code}
								placeholder=''
								id=''
								className=''
							/>
						</div>
						<div className='inputFormContainer'>
							<label htmlFor=''>Postal Code</label>
							<input
								type='text'
								placeholder=''
								name='PostalCode'
								value={cardDetails.PostalCode}
								id=''
								className=''
							/>
						</div>
					</div>
					<div className='radioContainer radio'>
						<input
							type='radio'
							name=''
							id='check'
							value={cardDetails.storeCard}
						/>
						<label htmlFor='check'>Use This For Next Purchase</label>
					</div>
					<button>Add Card</button>
				</form>
			</section>
			<section className='paymentDetails'>
				<div className='paymentDetailsInformation'>
					<h3>SubTotal</h3>
					<h3>Estimated Tax</h3>
					<h3>
						Promotional Code: <span>Z4KLM9A</span>
					</h3>
				</div>
				<div className='paymentDetailsAmount'>
					<h3>₦{paymentDetails.subtotal}.00</h3>
					<h3>₦{paymentDetails.tax}</h3>
					<h3>₦-{paymentDetails.code}.00</h3>
				</div>
			</section>
			<div className='pay'>
				<button>Complete Payment</button>
				<h1>Total : ₦{total}</h1>
			</div>
		</div>
	);
}

export default App;
