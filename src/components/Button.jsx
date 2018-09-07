import React from 'react';
import "./Button.css";

const Button = props => {

	const isOperator = value => {
		const classes = "button-wrapper";

		if (!isNaN(value) || value === "." || value === "=") {
			return classes;
		}
		return classes + ' operator';
	}

	return (
		<div className={isOperator(props.children)} onClick={ () => props.onInput(props.children)}>
			{props.children}
		</div>
	 );
}

export default Button;