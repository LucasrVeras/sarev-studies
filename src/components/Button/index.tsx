import React from 'react';

class Button extends React.Component {
	render(){
		return(	
			<button className="btn btn-secondary btn-lg">
				{this.props.children}
			</button>
		);
	}
};

export default Button;