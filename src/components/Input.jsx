import React from "react";
import "./Input.css";

const Input = props => {
	return (
		<div>
			<input
				type="text"
				name="input"
				value={props.input}
				className="input"
				onChange={e => props.onInput(e.target.value, true)}
			/>
		</div>
	);
};

export default Input;
