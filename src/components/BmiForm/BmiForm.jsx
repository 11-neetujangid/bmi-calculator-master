import React from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { useDispatch } from 'react-redux';
import { setFormValues } from '../../Actions/Action';
import { useSelector } from 'react-redux';

// const initialValues = {
// 	weight: '',
// 	height: '',
// 	date: ''
// }
const BmiForm = ({ change }) => {
	// const [state, setState] = useState(initialState);
	const dispatch = useDispatch();
	const values = useSelector((state) => state.values)
	const user = useSelector((state) => state.user)
	const handleChange = e => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		const date = new Date().toLocaleString();
		dispatch(setFormValues({
			...values,
			[e.target.name]: e.target.value,
			date: date,
		}))
	};
	const handleSubmit = () => {
		change(values);
	};
	return (
		<>
			<div className='row center'>
				<h1 className='white-text'> BMI Tracker </h1>
			</div>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">Weight (in kg)</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="1"
						max="999"
						placeholder="50"
						onChange={handleChange}
					/>
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="176"
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={values.weight === '' || values.height === ''}
					onClick={handleSubmit}
				>
					Calculate BMI
				</button>
			</div>
		</>
	);
};
BmiForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default BmiForm;
