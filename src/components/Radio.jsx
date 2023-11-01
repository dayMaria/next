import { FormControlLabel, Radio as MuiRadio } from "@mui/material";
import { useRef } from "react";

export default function Radio({ className = "", disabled, fullWidth, label, onChange, value }) {
	const radioRef = useRef(null);

	function handleChange(ev) {
		ev.stopPropagation();
    if(onChange)
  		onChange(ev);
	}

	function handleToggle() {
		const ev = new Event("change");
		radioRef.current.dispatchEvent(ev);
	}

	return (
		<FormControlLabel
			className={`${fullWidth ? "w-full" : ""} ${className} hover:bg-gray-50 pr-2`}
			control={
				<MuiRadio
					ref={radioRef}
					onChange={handleChange}
					size="small" />
			}
      disabled={disabled}
			label={label}
			onClick={handleToggle}
			value={value}
		/>
	);
}
