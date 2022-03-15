import React from 'react';
import Button from '../Button';

class Form extends React.Component {
	render(){
		return(
			<form>
				<div>
					<label htmlFor="task">
						add new study
					</label>
					<input 
						type="text"
						name="task"
						id="task"
						placeholder="What to study today?"
						required/>
				</div>	
				<div>
					<label htmlFor="time">
						time
					</label>
					<input 
						type="time"
						step="1"
						name="time"
						id="time"
						min="00:00:00"
						max="01:30:00"
						required/>
				</div>
				<Button />
			</form>
		);
	}
};

export default Form;