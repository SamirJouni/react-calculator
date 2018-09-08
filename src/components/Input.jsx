import React from 'react';
import "./Input.css";

const Input = props => {
	return (
		<div>
			<input type="text" name="input" value={props.input} className="input" />
		</div>
	 );
}

export default Input;