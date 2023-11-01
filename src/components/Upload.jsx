import { Clear, CloudUpload } from "@mui/icons-material";
import { Tooltip, Typography } from "@mui/material";
import { useRef } from "react";

import IconButton from "./IconButton";

export default function Upload({ label, onChange, value }) {
	const inputRef = useRef();

	function handleChange(ev) {
		if (ev.target.files && ev.target.files[0])
			onChange(ev.target.files[0]);
	}

	function handleClear() {
		onChange(null);
	}

	function handleClick() {
		inputRef.current.click();
	}

	return (
		<div className="flex items-center space-x-3">
			<div className="flex items-center space-x-1">
				<input className="hidden" ref={inputRef} onChange={handleChange} type="file" />
				<Typography variant="body1">{label}</Typography>
				<Tooltip title="Subir archivo">
					<IconButton color="primary" onClick={handleClick} edge="end">
						<CloudUpload />
					</IconButton>
				</Tooltip>
			</div>
			{value && (
				<div className="flex items-center space-x-1">
					<Typography variant="body1">{value.name}</Typography>
					<Tooltip title="Quitar archivo">
						<IconButton onClick={handleClear} edge="end">
							<Clear />
						</IconButton>
					</Tooltip>
				</div>
			)}
		</div>
	);
}